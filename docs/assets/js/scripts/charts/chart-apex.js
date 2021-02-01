/*=========================================================================================
    File Name: chart-apex.js
    Description: Apexchart Examples
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {

  var $primary = '#0E948D';
  var $success = '#28C76F';
  var $danger = '#EA5455';
  var $warning = '#FF9F43';
  var $info = '#00cfe8';
  var $primary_light = '#41bfb9';
  var $danger_light = '#f29292';
  var $success_light = '#55DD92';
  var $warning_light = '#ffc085';
  var $info_light = '#1fcadb';
  var $strok_color = '#b9c3cd';
  var $label_color = '#e7e7e7';
  var $white = '#fff';

  var themeColors = [$primary, $warning, $success, $danger, $info];

  // RTL Support
  var yaxis_opposite = false;
  if($('html').data('textdirection') == 'rtl'){
    yaxis_opposite = true;
  }

  /*chart application-statistic*/
  var ChartOptions = {
    chart: {
      height: 350,
      type: 'bar',
      stacked: true,
      fontFamily: 'Prompt',
    },
    colors: themeColors,
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    // colors: ['#3A5794', '#A5C351', '#E14A84'],
    series: [{
      name: 'ลงทะเบียนผ่านการแนะนำเพื่อน',
      type: 'column',
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41]
    }, {
      name: 'ลงทะเบียนด้วยตัวเอง',
      type: 'column',
      data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27, 13, 23, 20]
    }],
    dataLabels: {
      enabled: false
    },
    labels: ['01/01/2563', '01/02/2563', '01/03/2563',
              '01/04/2563', '01/05/2563', '01/06/2563',
              '01/07/2563', '01/08/2563', '01/09/2563',
              '01/10/2563', '01/11/2563', '01/12/2563',
              '01/13/2563', '01/14/2563', '01/15/2563',],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      title: {
        text: 'จำนวน'
      },
      opposite: yaxis_opposite
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " คน";
          }
          return y;

        }
      }
    }
  }
  var Chart = new ApexCharts(
    document.querySelector("#bar-chart"),
    ChartOptions
  );
  Chart.render();

  /*chart application-statistic*/
  var ChartOptionsYear = {
    chart: {
      height: 350,
      type: 'bar',
      stacked: true,
      fontFamily: 'Prompt',
    },
    colors: themeColors,
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    // colors: ['#3A5794', '#A5C351', '#E14A84'],
    series: [{
      name: 'ลงทะเบียนผ่านการแนะนำเพื่อน',
      type: 'column',
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41]
    }, {
      name: 'ลงทะเบียนด้วยตัวเอง',
      type: 'column',
      data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27, 13, 23, 20]
    }],
    dataLabels: {
      enabled: false
    },
    labels: ['01/01/2562', '02/01/2562', '03/01/2562',
              '04/01/2562', '05/01/2562', '06/01/2562',
              '07/01/2562', '08/01/2562', '09/01/2562',
              '10/01/2562', '11/01/2562', '12/01/2562',
              '01/01/2563', '02/01/2563', '03/01/2563',],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      title: {
        text: 'จำนวน'
      },
      opposite: yaxis_opposite
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " คน";
          }
          return y;

        }
      }
    }
  }
  var Chart = new ApexCharts(
    document.querySelector("#bar-chart-year"),
    ChartOptionsYear
  );
  Chart.render();

  /*chart invite-friends*/
  var ChartOptionsInvite = {
    chart: {
      height: 350,
      type: 'bar',
      stacked: false,
      fontFamily: 'Prompt',
    },
    colors: themeColors,
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    // colors: ['#3A5794', '#A5C351', '#E14A84'],
    series: [{
      name: 'ผู้สมัครเข้าร่วมโครงการชวนเพื่อน',
      type: 'column',
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41]
    }],
    dataLabels: {
      enabled: false
    },
    labels: ['01/01/2562', '02/01/2562', '03/01/2562',
              '04/01/2562', '05/01/2562', '06/01/2562',
              '07/01/2562', '08/01/2562', '09/01/2562',
              '10/01/2562', '11/01/2562', '12/01/2562',
              '01/01/2563', '02/01/2563', '03/01/2563',],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      title: {
        text: 'จำนวน'
      },
      opposite: yaxis_opposite
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " คน";
          }
          return y;

        }
      }
    }
  }
  var Chart = new ApexCharts(
    document.querySelector("#bar-chart-invite"),
    ChartOptionsInvite
  );
  Chart.render();


  /*chart dashboard 1*/
  var dashboard1Chartoptions = {
    chart: {
      type: 'pie',
      height: 330,
      dropShadow: {
        enabled: false,
        blur: 5,
        left: 1,
        top: 1,
        opacity: 0.5
      },
      toolbar: {
        show: false
      },
      fontFamily: 'Prompt',
    },
    labels: ['ลงทะเบียนผ่านการแนะนำเพื่อน', 'ลงทะเบียนด้วยตัวเอง'],
    series: [ 1400, 150],
    dataLabels: {
      enabled: true
    },
    legend: { show: false},
    stroke: {
      width: 5
    },
    colors: [$primary, $warning],
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: [$primary_light, $warning_light]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " คน";
          }
          return y;

        }
      }
    }
  }

  var dashboard1Chart = new ApexCharts(
    document.querySelector("#pie-chart-dashboard-1"),
    dashboard1Chartoptions
  );

  dashboard1Chart.render();

  // Line Chart application-download
  // ----------------------------------
  var lineChartOptionsUsersDownload = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      fontFamily: 'Prompt',
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
      // curve: 'smooth'
    },
    series: [{
      name: "Andriod",
      data: [820, 411, 535, 351, 550, 720, 669, 591, 480, 389, 661, 991, 691, 591, 1248],
    },{
      name: "ios",
      data: [120, 200, 130, 175, 250, 420, 569, 585, 485, 389, 600, 891, 590, 745, 485],
    }],
    title: {
      text: 'จำนวนการดาวน์โหลด (เครื่อง)',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    labels: ['01/01/2563', '01/02/2563', '01/03/2563',
              '01/04/2563', '01/05/2563', '01/06/2563',
              '01/07/2563', '01/08/2563', '01/09/2563',
              '01/10/2563', '01/11/2563', '01/12/2563',
              '01/13/2563', '01/14/2563', '01/15/2563',],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChart = new ApexCharts(
    document.querySelector("#line-chart-user-download"),
    lineChartOptionsUsersDownload
  );
  lineChart.render();


  // Line Chart application-lost
  // ----------------------------------
  var lineChartOptionsUsersLost = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      fontFamily: 'Prompt',
    },
    colors: [$danger,$danger_light],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
      // curve: 'smooth'
    },
    series: [{
      name: "Android",
      data: [250, 345, 250, 120, 269, 330, 351, 349, 162, 280, 141, 491, 291, 351, 650],
    },{
      name: "ios",
      data: [120, 100, 30, 75, 150, 120, 269, 85, 185, 289, 100, 191, 290, 345, 185],
    }],
    title: {
      text: 'จำนวนการถอนการติดตั้ง (เครื่อง)',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    labels: ['01/01/2563', '01/02/2563', '01/03/2563',
              '01/04/2563', '01/05/2563', '01/06/2563',
              '01/07/2563', '01/08/2563', '01/09/2563',
              '01/10/2563', '01/11/2563', '01/12/2563',
              '01/13/2563', '01/14/2563', '01/15/2563',],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChart = new ApexCharts(
    document.querySelector("#line-chart-user-lost"),
    lineChartOptionsUsersLost
  );
  lineChart.render();


  // Line Chart application-use
  // ----------------------------------
  var lineChartOptionsActiveUsers = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      fontFamily: 'Prompt',
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
      // curve: 'smooth'
    },
    series: [{
      name: "Android",
      data: [750, 945, 550, 720, 669, 730, 551, 549, 462, 780, 641, 991, 691, 591, 1782],
    },{
      name: "ios",
      data: [550, 445, 650, 120, 369, 430, 251, 849, 162, 480, 341, 391, 291, 191, 782],
    }],
    title: {
      text: 'จำนวนผู้เข้าใช้งาน (คน)',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    labels: ['01/01/2563', '01/02/2563', '01/03/2563',
              '01/04/2563', '01/05/2563', '01/06/2563',
              '01/07/2563', '01/08/2563', '01/09/2563',
              '01/10/2563', '01/11/2563', '01/12/2563',
              '01/13/2563', '01/14/2563', '01/15/2563',],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChart = new ApexCharts(
    document.querySelector("#line-chart-active-users"),
    lineChartOptionsActiveUsers
  );
  lineChart.render();

});
