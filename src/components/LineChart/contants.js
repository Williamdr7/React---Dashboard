export const CHART_OPTION = (title) => ({
  title: {
    show: 'true',
    text: title,
    left: '16px',
    top: '16px',
    textStyle: {
      color: '#1D2C4B',
      fontFamily: 'Inter',
      fontWeight: 'normal',
      fontSize: '14px',
    },
  },
  grid: {
    width: '85%',
    height: '121px',
    bottom: '0%',
    top: '30%',
  },
  xAxis: {
    axisTick: false,
    axisLine: false,
    axisLabel: {
      color: '#1D2C4B',
    },
    type: 'category',
    data: [
      '08/Dez',
      '09/Dez',
      '10/Dez',
      '11/Dez',
      '12/dez',
      '13/Dez',
      '14/Dez',
      '15/Dez',
      '16/Dez',
      '17/Dez',
      '18/Dez',
      '19/Dez',
      '20/Dez',
      '21/Dez',
    ],
  },
  yAxis: {
    lineStyle: {
      color: '#BBBDC8',
    },
    type: 'value',
  },
  series: [
    {
      data: [46, 43, 42, 41, 38, 41, 48, 41, 34, 40, 27, 40, 43, 46, 44],
      type: 'line',
      symbolSize: 6,
      areaStyle: {
        normal: {
          color: '#EAF9FF',
        },
      },
      itemStyle: {
        color: '#0065FF',
      },
    },
  ],
})
