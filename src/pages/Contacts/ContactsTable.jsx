import React from 'react'
import './ContactsTable.scss'
import ContactCard from '../../components/ContactCard/ContactCard'
import contactsList from '../../data/contacts.json'
import SearchInput from '../../components/Utils/SearchInput'
import FilterButton from '../../components/Utils/FilterButton'
import AddButton from '../../components/Utils/AddButton'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  filterContacts,
  getTotalPagesSelect,
  getTotalShowedPages,
} from '../../helpers/contactHelper'
import Pagination from '@material-ui/lab/Pagination'
import { range } from './constants'
import { configurePaginate } from '../../helpers/configurePaginate'
import { FormControl, MenuItem, Select, Typography } from '@material-ui/core'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function ContactsTable() {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState(contactsList)
  const [paginatedContacts, setPaginatedContacts] = useState([])
  const [editing, setEditing] = useState({})
  const [page, setPage] = useState(1)

  const handlePaginate = (_ev, value) => {
    setPage(value)
  }

  const doPaginate = (currentContacts) => {
    const paginateSettings = configurePaginate(
      currentContacts,
      page,
      range
    ) || {
      newContacts: [],
      newPage: 1,
    }

    setPaginatedContacts(paginateSettings?.newContacts)
    setPage(paginateSettings?.newPage)
  }

  useEffect(() => {
    if (filter) {
      setContacts(filterContacts(contactsList, filter))
    } else setContacts(contactsList)
  }, [filter])

  useEffect(() => {
    doPaginate(contacts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts, page])

  return (
    <div className="contactContainer">
      {editing.name ? (
        <div className="contactFormContainer">
          <ContactForm toggleForm={() => setEditing({})} />
        </div>
      ) : (
        <>
          <div className="tableHeaderMenu">
            <h4 className="contactTitle">Contatos</h4>
            <div className="contacSearchInput">
              <SearchInput onChange={(ev) => setFilter(ev.target.value)} />
            </div>
            <div className="tableOptions">
              <FilterButton />
              <AddButton />
            </div>
          </div>
          <div className="tableContainer">
            <div className="tableHeader">
              <Typography>Nome do cliente</Typography>
              <Typography>E-mail</Typography>
              <Typography>Telefone</Typography>
            </div>
            {paginatedContacts && paginatedContacts.length
              ? paginatedContacts.map((contact, i) => (
                  <ContactCard
                    onClick={() => setEditing(contact)}
                    contact={contact}
                    key={i}
                  />
                ))
              : null}
            {paginatedContacts && paginatedContacts.length ? (
              <div className="paginateContainer">
                <Pagination
                  className="paginate"
                  count={Math.ceil(contactsList.length / range || 1) || 1}
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                  onChange={handlePaginate}
                />
                <div className="dataInfoContainer">
                  <Typography>
                    Exibindo
                    {' ' +
                      getTotalShowedPages(
                        page,
                        range,
                        paginatedContacts.length,
                        contactsList.length
                      ) +
                      ' '}
                    de {contacts.length} registros
                  </Typography>
                  <FormControl>
                    <Select
                      className="selectPage"
                      variant="outlined"
                      value={page}
                      onChange={(ev) => handlePaginate(null, ev.target.value)}
                    >
                      {getTotalPagesSelect(
                        Math.ceil(contactsList.length / range || 1) || 1
                      ).map((item) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}
