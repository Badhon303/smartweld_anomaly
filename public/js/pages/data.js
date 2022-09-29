$(document).ready(function () {
  let incVal = 0
  let base_url = "http://129.213.115.181:3000"
  // let stream1ucl,
  //   stream2ucl,
  //   stream3ucl,
  //   stream10ucl,
  //   stream11ucl,
  //   stream12ucl,
  //   stream1lcl,
  //   stream2lcl,
  //   stream3lcl,
  //   stream10lcl,
  //   stream11lcl,
  //   stream12lcl,
  //   anomalySet = 0

  // try {
  //   $.ajax({
  //     url: "http://13.229.127.60:5000/features",
  //     type: "GET",
  //     dataType: "json", // added data type
  //     async: false,
  //     success: function (res) {
  //       // high_weld_cur_threshold = Number(res.data[0].high_weld_cur_threshold)
  //       for (let i = 0; i < res.length; i++) {
  //         if (res[i].id == 1) {
  //           let id = i
  //           stream1lcl = Number(res[id].lcl)
  //           stream1ucl = Number(res[id].ucl)
  //         }
  //         if (res[i].id == 2) {
  //           let id = i
  //           stream2lcl = Number(res[id].lcl)
  //           stream2ucl = Number(res[id].ucl)
  //         }
  //         if (res[i].id == 3) {
  //           stream3lcl = Number(res[i].lcl)
  //           stream3ucl = Number(res[i].ucl)
  //         }
  //         if (res[i].id == 4) {
  //           stream10lcl = Number(res[i].lcl)
  //           stream10ucl = Number(res[i].ucl)
  //         }
  //         if (res[i].id == 5) {
  //           stream11lcl = Number(res[i].lcl)
  //           stream11ucl = Number(res[i].ucl)
  //         }
  //         if (res[i].id == 6) {
  //           stream12lcl = Number(res[i].lcl)
  //           stream12ucl = Number(res[i].ucl)
  //         }
  //         if (res[i].id == 13) {
  //           anomalySet = Number(res[i].anomaly_score)
  //         }
  //       }
  //       // stream1lcl = Number(res[0].lcl)
  //       // stream1ucl = Number(res[0].ucl)
  //       // stream2lcl = Number(res[1].lcl)
  //       // stream2ucl = Number(res[1].ucl)
  //       // stream3lcl = Number(res[2].lcl)
  //       // stream3ucl = Number(res[2].ucl)
  //       // stream10lcl = Number(res[3].lcl)
  //       // stream10ucl = Number(res[3].ucl)
  //       // stream11lcl = Number(res[4].lcl)
  //       // stream11ucl = Number(res[4].ucl)
  //       // stream12lcl = Number(res[5].lcl)
  //       // stream12ucl = Number(res[5].ucl)

  //       // console.log(stream1ucl)
  //     },
  //   })
  // } catch {
  //   console.log("ucl lcl api not working")
  // }

  // $("#validationCustom01").val(stream1lcl)
  // $("#validationCustom02").val(stream1ucl)
  // $("#validationCustom03").val(stream2lcl)
  // $("#validationCustom04").val(stream2ucl)
  // $("#validationCustom05").val(stream3lcl)
  // $("#validationCustom06").val(stream3ucl)
  // $("#validationCustom07").val(stream10lcl)
  // $("#validationCustom08").val(stream10ucl)
  // $("#validationCustom09").val(stream11lcl)
  // $("#validationCustom10").val(stream11ucl)
  // $("#validationCustom11").val(stream12lcl)
  // $("#validationCustom12").val(stream12ucl)
  // $("#validationCustom22").val(anomalySet)

  var stream1 = {
    series: [
      {
        name: "Stream",
        data: [[Date.now(), Math.floor(0.0)]],
      },
    ],
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 80,
    //       borderColor: "#ff0e0e",
    //       label: {
    //         borderColor: "#ff0e0e",
    //         style: {
    //           color: "#fff",
    //           background: "#ff0e0e",
    //         },
    //         text: "UCL @ " + stream1ucl,
    //       },
    //     },
    //     {
    //       y: 20,
    //       borderColor: "#00008b",
    //       label: {
    //         borderColor: "#00008b",
    //         style: {
    //           color: "#fff",
    //           background: "#00008b",
    //         },
    //         text: "LCL @ " + stream1lcl,
    //       },
    //     },
    //   ],
    // },
    chart: {
      id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Machine ID: 869247043362690",
    //   align: "right",
    // },
    markers: {
      size: 0,
    },

    xaxis: {
      type: "datetime",
      range: 120000,
    },
    yaxis: {
      floating: false,
      decimalsInFloat: false,
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
  }
  var stream2 = {
    series: [
      {
        name: "Stream",
        data: [[Date.now(), Math.floor(0.0)]],
      },
    ],
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 80,
    //       borderColor: "#ff0e0e",
    //       label: {
    //         borderColor: "#ff0e0e",
    //         style: {
    //           color: "#fff",
    //           background: "#ff0e0e",
    //         },
    //         text: "UCL @ " + stream2ucl,
    //       },
    //     },
    //     {
    //       y: 20,
    //       borderColor: "#00008b",
    //       label: {
    //         borderColor: "#00008b",
    //         style: {
    //           color: "#fff",
    //           background: "#00008b",
    //         },
    //         text: "LCL @ " + stream2lcl,
    //       },
    //     },
    //   ],
    // },
    chart: {
      id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Machine ID: 869247043362690",
    //   align: "right",
    // },
    markers: {
      size: 0,
    },

    xaxis: {
      type: "datetime",
      range: 120000,
    },
    yaxis: {
      floating: false,
      decimalsInFloat: false,
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
  }
  var stream3 = {
    series: [
      {
        name: "Stream",
        data: [[Date.now(), Math.floor(0.0)]],
      },
    ],
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 80,
    //       borderColor: "#ff0e0e",
    //       label: {
    //         borderColor: "#ff0e0e",
    //         style: {
    //           color: "#fff",
    //           background: "#ff0e0e",
    //         },
    //         text: "UCL @ " + stream3ucl,
    //       },
    //     },
    //     {
    //       y: 20,
    //       borderColor: "#00008b",
    //       label: {
    //         borderColor: "#00008b",
    //         style: {
    //           color: "#fff",
    //           background: "#00008b",
    //         },
    //         text: "LCL @ " + stream3lcl,
    //       },
    //     },
    //   ],
    // },
    chart: {
      id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Machine ID: 869247043362690",
    //   align: "right",
    // },
    markers: {
      size: 0,
    },

    xaxis: {
      type: "datetime",
      range: 120000,
    },
    yaxis: {
      floating: false,
      decimalsInFloat: false,
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
  }
  var stream10 = {
    series: [
      {
        name: "Stream",
        data: [[Date.now(), Math.floor(0.0)]],
      },
    ],
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 80,
    //       borderColor: "#ff0e0e",
    //       label: {
    //         borderColor: "#ff0e0e",
    //         style: {
    //           color: "#fff",
    //           background: "#ff0e0e",
    //         },
    //         text: "UCL @ " + stream10ucl,
    //       },
    //     },
    //     {
    //       y: 20,
    //       borderColor: "#00008b",
    //       label: {
    //         borderColor: "#00008b",
    //         style: {
    //           color: "#fff",
    //           background: "#00008b",
    //         },
    //         text: "LCL @ " + stream10lcl,
    //       },
    //     },
    //   ],
    // },
    chart: {
      id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Machine ID: 869247043362690",
    //   align: "right",
    // },
    markers: {
      size: 0,
    },

    xaxis: {
      type: "datetime",
      range: 120000,
    },
    yaxis: {
      floating: false,
      decimalsInFloat: false,
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
  }
  var stream11 = {
    series: [
      {
        name: "Stream",
        data: [[Date.now(), Math.floor(0.0)]],
      },
    ],
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 80,
    //       borderColor: "#ff0e0e",
    //       label: {
    //         borderColor: "#ff0e0e",
    //         style: {
    //           color: "#fff",
    //           background: "#ff0e0e",
    //         },
    //         text: "UCL @ " + stream11ucl,
    //       },
    //     },
    //     {
    //       y: 20,
    //       borderColor: "#00008b",
    //       label: {
    //         borderColor: "#00008b",
    //         style: {
    //           color: "#fff",
    //           background: "#00008b",
    //         },
    //         text: "LCL @ " + stream11lcl,
    //       },
    //     },
    //   ],
    // },
    chart: {
      id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Machine ID: 869247043362690",
    //   align: "right",
    // },
    markers: {
      size: 0,
    },

    xaxis: {
      type: "datetime",
      range: 120000,
    },
    yaxis: {
      floating: false,
      decimalsInFloat: false,
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
  }
  var stream12 = {
    series: [
      {
        name: "Stream",
        data: [[Date.now(), Math.floor(0.0)]],
      },
    ],
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 80,
    //       borderColor: "#ff0e0e",
    //       label: {
    //         borderColor: "#ff0e0e",
    //         style: {
    //           color: "#fff",
    //           background: "#ff0e0e",
    //         },
    //         text: "UCL @ " + stream12ucl,
    //       },
    //     },
    //     {
    //       y: 20,
    //       borderColor: "#00008b",
    //       label: {
    //         borderColor: "#00008b",
    //         style: {
    //           color: "#fff",
    //           background: "#00008b",
    //         },
    //         text: "LCL @ " + stream12lcl,
    //       },
    //     },
    //   ],
    // },
    chart: {
      id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Machine ID: 869247043362690",
    //   align: "right",
    // },
    markers: {
      size: 0,
    },

    xaxis: {
      type: "datetime",
      range: 120000,
    },
    yaxis: {
      floating: false,
      decimalsInFloat: false,
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
  }

  var anomaly = {
    series: [
      {
        name: "anomaly",
        data: [[Math.floor(0.0)]],
      },
    ],
    chart: {
      // id: "realtime",
      height: 250,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: "Machine ID: 869247043362690",
    //   align: "right",
    // },
    // markers: {
    //   size: 0,
    // },

    // xaxis: {
    //   type: "datetime",
    //   range: 120000,
    // },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: [
      {
        // axisTicks: {
        //   show: true,
        // },
        // axisBorder: {
        //   show: true,
        //   color: "#008FFB",
        // },
        labels: {
          formatter: function (val) {
            return val.toFixed(2)
          },
          style: {
            colors: "#008FFB",
          },
        },
        tooltip: {
          enabled: false,
        },
      },
    ],
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -28,
      offsetX: 60,
    },
  }

  var streamChart = new ApexCharts(document.querySelector("#streamID"), stream1)
  streamChart.render()

  var streamChart1 = new ApexCharts(
    document.querySelector("#stream1ID"),
    stream2
  )
  streamChart1.render()

  var streamChart2 = new ApexCharts(
    document.querySelector("#stream2ID"),
    stream3
  )
  streamChart2.render()

  // var streamChart3 = new ApexCharts(
  //   document.querySelector("#stream3ID"),
  //   stream
  // )
  // streamChart3.render()

  // var streamChart4 = new ApexCharts(
  //   document.querySelector("#stream4ID"),
  //   stream
  // )
  // streamChart4.render()

  // var streamChart5 = new ApexCharts(
  //   document.querySelector("#stream5ID"),
  //   stream
  // )
  // streamChart5.render()

  // var streamChart6 = new ApexCharts(
  //   document.querySelector("#stream6ID"),
  //   stream
  // )
  // streamChart6.render()

  // var streamChart7 = new ApexCharts(
  //   document.querySelector("#stream7ID"),
  //   stream
  // )
  // streamChart7.render()

  // var streamChart8 = new ApexCharts(
  //   document.querySelector("#stream8ID"),
  //   stream
  // )
  // streamChart8.render()

  // var streamChart9 = new ApexCharts(
  //   document.querySelector("#stream9ID"),
  //   stream
  // )
  // streamChart9.render()

  var streamChart10 = new ApexCharts(
    document.querySelector("#stream10ID"),
    stream10
  )
  streamChart10.render()

  var streamChart11 = new ApexCharts(
    document.querySelector("#stream11ID"),
    stream11
  )
  streamChart11.render()

  var streamChart12 = new ApexCharts(
    document.querySelector("#stream12ID"),
    stream12
  )
  streamChart12.render()

  // var streamChart13 = new ApexCharts(
  //   document.querySelector("#stream13ID"),
  //   stream
  // )
  // streamChart13.render()

  // var streamChart14 = new ApexCharts(
  //   document.querySelector("#stream14ID"),
  //   stream
  // )
  // streamChart14.render()

  // var streamChart15 = new ApexCharts(
  //   document.querySelector("#stream15ID"),
  //   stream
  // )
  // streamChart15.render()

  // var streamChart16 = new ApexCharts(
  //   document.querySelector("#stream16ID"),
  //   stream
  // )
  // streamChart16.render()

  // var streamChart17 = new ApexCharts(
  //   document.querySelector("#stream17ID"),
  //   stream
  // )
  // streamChart17.render()

  // var streamChart18 = new ApexCharts(
  //   document.querySelector("#stream18ID"),
  //   stream
  // )
  // streamChart18.render()

  // var streamChart19 = new ApexCharts(
  //   document.querySelector("#stream19ID"),
  //   stream
  // )
  // streamChart19.render()

  var anomalyChart = new ApexCharts(
    document.querySelector("#anomalyID"),
    anomaly
  )
  anomalyChart.render()

  var anomalyChart1 = new ApexCharts(
    document.querySelector("#anomaly1ID"),
    anomaly
  )
  anomalyChart1.render()

  var anomalyChart2 = new ApexCharts(
    document.querySelector("#anomaly2ID"),
    anomaly
  )
  anomalyChart2.render()

  // var anomalyChart3 = new ApexCharts(
  //   document.querySelector("#anomaly3ID"),
  //   anomaly
  // )
  // anomalyChart3.render()

  // var anomalyChart4 = new ApexCharts(
  //   document.querySelector("#anomaly4ID"),
  //   anomaly
  // )
  // anomalyChart4.render()

  // var anomalyChart5 = new ApexCharts(
  //   document.querySelector("#anomaly5ID"),
  //   anomaly
  // )
  // anomalyChart5.render()

  // var anomalyChart6 = new ApexCharts(
  //   document.querySelector("#anomaly6ID"),
  //   anomaly
  // )
  // anomalyChart6.render()

  // var anomalyChart7 = new ApexCharts(
  //   document.querySelector("#anomaly7ID"),
  //   anomaly
  // )
  // anomalyChart7.render()

  // var anomalyChart8 = new ApexCharts(
  //   document.querySelector("#anomaly8ID"),
  //   anomaly
  // )
  // anomalyChart8.render()

  // var anomalyChart9 = new ApexCharts(
  //   document.querySelector("#anomaly9ID"),
  //   anomaly
  // )
  // anomalyChart9.render()

  var anomalyChart10 = new ApexCharts(
    document.querySelector("#anomaly10ID"),
    anomaly
  )
  anomalyChart10.render()

  var anomalyChart11 = new ApexCharts(
    document.querySelector("#anomaly11ID"),
    anomaly
  )
  anomalyChart11.render()

  var anomalyChart12 = new ApexCharts(
    document.querySelector("#anomaly12ID"),
    anomaly
  )
  anomalyChart12.render()

  // var anomalyChart13 = new ApexCharts(
  //   document.querySelector("#anomaly13ID"),
  //   anomaly
  // )
  // anomalyChart13.render()

  // var anomalyChart14 = new ApexCharts(
  //   document.querySelector("#anomaly14ID"),
  //   anomaly
  // )
  // anomalyChart14.render()

  // var anomalyChart15 = new ApexCharts(
  //   document.querySelector("#anomaly15ID"),
  //   anomaly
  // )
  // anomalyChart15.render()

  // var anomalyChart16 = new ApexCharts(
  //   document.querySelector("#anomaly16ID"),
  //   anomaly
  // )
  // anomalyChart16.render()

  // var anomalyChart17 = new ApexCharts(
  //   document.querySelector("#anomaly17ID"),
  //   anomaly
  // )
  // anomalyChart17.render()

  // var anomalyChart18 = new ApexCharts(
  //   document.querySelector("#anomaly18ID"),
  //   anomaly
  // )
  // anomalyChart18.render()

  // var anomalyChart19 = new ApexCharts(
  //   document.querySelector("#anomaly19ID"),
  //   anomaly
  // )
  // anomalyChart19.render()

  // $("#stream1").submit(async (e) => {
  //   e.preventDefault()
  //   let obj = {
  //     anomaly_score: 4.1,
  //     id: 1,
  //     kpi_name: "WET_OVEN_RH",
  //     lcl: $("#validationCustom01").val(),
  //     line: "A01",
  //     ucl: $("#validationCustom02").val(),
  //   }
  //   await fetch("http://13.229.127.60:5000/feature/1", {
  //     method: "PUT",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "Access-Control-Request-Method": "*",
  //     },
  //     body: JSON.stringify(obj),
  //   })
  // })

  // $("#stream2").submit(async (e) => {
  //   e.preventDefault()
  //   let obj = {
  //     anomaly_score: 4.1,
  //     id: 2,
  //     kpi_name: "WET_OVEN_RH_2",
  //     lcl: $("#validationCustom03").val(),
  //     line: "A01",
  //     ucl: $("#validationCustom04").val(),
  //   }
  //   await fetch("http://13.229.127.60:5000/feature/2", {
  //     method: "PUT",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "Access-Control-Request-Method": "*",
  //     },
  //     body: JSON.stringify(obj),
  //   })
  // })

  // $("#stream3").submit((e) => {
  //   e.preventDefault()
  //   let obj = {
  //     anomaly_score: 4.1,
  //     id: 3,
  //     kpi_name: "LATEX_TANK_1_SIDE_B",
  //     lcl: $("#validationCustom05").val(),
  //     line: "A01",
  //     ucl: $("#validationCustom06").val(),
  //   }
  //   fetch("http://13.229.127.60:5000/feature/3", {
  //     method: "PUT",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "Access-Control-Request-Method": "*",
  //     },
  //     body: JSON.stringify(obj),
  //   })
  // })

  // $("#stream10").submit((e) => {
  //   e.preventDefault()
  //   let obj = {
  //     anomaly_score: 4.1,
  //     id: 4,
  //     kpi_name: "WET_OVEN_RH",
  //     lcl: $("#validationCustom07").val(),
  //     line: "A02",
  //     ucl: $("#validationCustom08").val(),
  //   }
  //   fetch("http://13.229.127.60:5000/feature/4", {
  //     method: "PUT",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "Access-Control-Request-Method": "*",
  //     },
  //     body: JSON.stringify(obj),
  //   })
  // })

  // $("#stream11").submit((e) => {
  //   e.preventDefault()
  //   let obj = {
  //     anomaly_score: 4.1,
  //     id: 5,
  //     kpi_name: "WET_OVEN_RH_2",
  //     lcl: $("#validationCustom09").val(),
  //     line: "A02",
  //     ucl: $("#validationCustom10").val(),
  //   }
  //   fetch("http://13.229.127.60:5000/feature/5", {
  //     method: "PUT",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "Access-Control-Request-Method": "*",
  //     },
  //     body: JSON.stringify(obj),
  //   })
  // })

  // $("#stream12").submit((e) => {
  //   e.preventDefault()
  //   let obj = {
  //     anomaly_score: 4.1,
  //     id: 6,
  //     kpi_name: "LATEX_TANK_1_SIDE_B",
  //     lcl: $("#validationCustom11").val(),
  //     line: "A02",
  //     ucl: $("#validationCustom12").val(),
  //   }
  //   fetch("http://13.229.127.60:5000/feature/6", {
  //     method: "PUT",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "Access-Control-Request-Method": "*",
  //     },
  //     body: JSON.stringify(obj),
  //   })
  // })

  $("#anomaly_score").submit((e) => {
    e.preventDefault()
    let obj = {
      anomaly_score: $("#validationCustom22").val(),
      id: 13,
      kpi_name: "ABC",
      lcl: 20,
      line: "A02",
      ucl: 30,
    }
    fetch("http://13.229.127.60:5000/feature/13", {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*",
      },
      body: JSON.stringify(obj),
    })
  })

  $("#email").submit(() => {
    let obj = {
      email: $("#validationCustom21").val(),
    }
    fetch("http://13.229.127.60:5000/subscribe", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*",
      },
      body: JSON.stringify(obj),
    })
  })

  function webSocketInvoke() {
    var socket = io("http://localhost:3000")
    // var socket = io(`${base_url}`)

    socket.on("event", async (value) => {
      console.log("values A1: ", value)
      streamChart.updateSeries([
        {
          data: [
            ...streamChart.w.config.series[0].data,
            [streamChart.w.globals.maxX + 1000, value.WET_OVEN_RH],
          ],
        },
      ])
      streamChart1.updateSeries([
        {
          data: [
            ...streamChart1.w.config.series[0].data,
            [streamChart1.w.globals.maxX + 1000, value.WET_OVEN_RH_2],
          ],
        },
      ])
      streamChart2.updateSeries([
        {
          data: [
            ...streamChart2.w.config.series[0].data,
            [streamChart2.w.globals.maxX + 1000, value.LATEX_TANK_1_SIDE_B],
          ],
        },
      ])
      // streamChart3.updateSeries([
      //   {
      //     data: [
      //       ...streamChart3.w.config.series[0].data,
      //       [streamChart3.w.globals.maxX + 1000, value.LN_TANK],
      //     ],
      //   },
      // ])
      // streamChart4.updateSeries([
      //   {
      //     data: [
      //       ...streamChart4.w.config.series[0].data,
      //       [streamChart4.w.globals.maxX + 1000, value.COAGULANT_OVEN_1],
      //     ],
      //   },
      // ])
      // streamChart5.updateSeries([
      //   {
      //     data: [
      //       ...streamChart5.w.config.series[0].data,
      //       [streamChart5.w.globals.maxX + 1000, value.RINSING_TANK_2],
      //     ],
      //   },
      // ])
      // streamChart6.updateSeries([
      //   {
      //     data: [
      //       ...streamChart6.w.config.series[0].data,
      //       [streamChart6.w.globals.maxX + 1000, value.WET_OVEN_4],
      //     ],
      //   },
      // ])
      // streamChart7.updateSeries([
      //   {
      //     data: [
      //       ...streamChart7.w.config.series[0].data,
      //       [streamChart7.w.globals.maxX + 1000, value.COAGULANT_OVEN_2],
      //     ],
      //   },
      // ])
      // streamChart8.updateSeries([
      //   {
      //     data: [
      //       ...streamChart8.w.config.series[0].data,
      //       [streamChart8.w.globals.maxX + 1000, value.WET_OVEN_1],
      //     ],
      //   },
      // ])
      // streamChart9.updateSeries([
      //   {
      //     data: [
      //       ...streamChart9.w.config.series[0].data,
      //       [streamChart9.w.globals.maxX + 1000, value.WET_OVEN_3],
      //     ],
      //   },
      // ])
    })
    socket.on("event1", async (value) => {
      console.log("values A2: ", value)
      streamChart10.updateSeries([
        {
          data: [
            ...streamChart10.w.config.series[0].data,
            [streamChart10.w.globals.maxX + 1000, value.WET_OVEN_RH],
          ],
        },
      ])
      streamChart11.updateSeries([
        {
          data: [
            ...streamChart11.w.config.series[0].data,
            [streamChart11.w.globals.maxX + 1000, value.WET_OVEN_RH_2],
          ],
        },
      ])
      streamChart12.updateSeries([
        {
          data: [
            ...streamChart12.w.config.series[0].data,
            [streamChart12.w.globals.maxX + 1000, value.LATEX_TANK_1_SIDE_B],
          ],
        },
      ])
    })

    socket.on("e", async (value) => {
      console.log("value e: ", value)
      incVal += 1
      document.getElementById("inc").innerHTML = incVal
      anomalyChart.updateSeries([
        {
          name: "anomaly",
          data: value,
        },
      ])
    })

    socket.on("e1", async (value) => {
      console.log("value e1: ", value)
      anomalyChart1.updateSeries([
        {
          name: "anomaly",
          data: value,
        },
      ])
    })

    socket.on("e2", async (value) => {
      console.log("value e2: ", value)
      anomalyChart2.updateSeries([
        {
          name: "anomaly",
          data: value,
        },
      ])
    })

    socket.on("eA", async (value) => {
      console.log("value: ", value)
      anomalyChart10.updateSeries([
        {
          name: "anomaly",
          data: value,
        },
      ])
    })
    socket.on("eA1", async (value) => {
      console.log("value eA1: ", value)
      anomalyChart11.updateSeries([
        {
          name: "anomaly",
          data: value,
        },
      ])
    })
    socket.on("eA2", async (value) => {
      console.log("value eA2: ", value)
      anomalyChart12.updateSeries([
        {
          name: "anomaly",
          data: value,
        },
      ])
    })
  }
  webSocketInvoke()

  $(".chartGroup").hide()
  $(".A").hide()
  $("#AID").show()
  $("#streamID").show()
  $("#anomalyID").show()

  $("#selectMe").change(function () {
    $(".A").hide()
    $("#A" + $(this).val()).show()
    $(".chartGroup").hide()
    $("#stream" + $(this).val()).show()
    $("#anomaly" + $(this).val()).show()
  })

  $("#selectMeA1").change(function () {
    $(".chartGroup").hide()
    $("#stream" + $(this).val()).show()
    $("#anomaly" + $(this).val()).show()
  })

  $("#selectMeA2").change(function () {
    $(".chartGroup").hide()
    $("#stream" + $(this).val()).show()
    $("#anomaly" + $(this).val()).show()
  })
})
