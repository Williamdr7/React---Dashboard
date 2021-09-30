import React from 'react'
import { CHART_OPTION } from './contants'
import './LineChart.scss'
import ReactEcharts from 'echarts-for-react'

export default function LineChart({ title }) {
  return (
    <div className="lineChartContainer">
      <div className="chartContainer">
        <ReactEcharts option={CHART_OPTION(title)} />
      </div>
    </div>
  )
}
