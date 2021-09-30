export default function pickbgColor(status) {
  switch (status) {
    case 'Vencido':
      return 'done'
    case 'Agendado':
      return 'scheduled'
    default:
      return ' '
  }
}
