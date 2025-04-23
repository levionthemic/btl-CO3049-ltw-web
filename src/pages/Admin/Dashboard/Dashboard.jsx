

import Chart from 'react-apexcharts'
function Dashboard() {
  const optionsProfileVisit = {
    annotations: { position: 'back' },
    dataLabels: { enabled: false },
    chart: { type: 'bar', height: 300 },
    fill: { opacity: 1 },
    plotOptions: {},
    colors: ['#435ebe'],
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    }
  }
  const seriesProfileVisit = [
    {
      name: 'sales',
      data: [9, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20]
    }
  ]

  const optionsVisitorsProfile = {
    labels: ['Male', 'Female'],
    colors: ['#435ebe', '#55c6e8'],
    chart: {
      type: 'donut',
      width: '100%',
      height: 350
    },
    legend: { position: 'bottom' },
    plotOptions: {
      pie: {
        donut: {
          size: '30%'
        }
      }
    }
  }
  const seriesVisitorsProfile = [70, 30]

  const baseAreaOptions = {
    chart: {
      height: 80,
      type: 'area',
      toolbar: { show: false }
    },
    stroke: { width: 2 },
    grid: { show: false },
    dataLabels: { enabled: false },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
        '2018-09-19T07:30:00.000Z',
        '2018-09-19T08:30:00.000Z',
        '2018-09-19T09:30:00.000Z',
        '2018-09-19T10:30:00.000Z',
        '2018-09-19T11:30:00.000Z'
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false }
    },
    yaxis: { labels: { show: false } },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  }
  const baseSeries = [
    {
      name: 'series1',
      data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
    }
  ]

  const areaChartConfigs = [
    { title: 'Europe', options: { ...baseAreaOptions, colors: ['#5350e9'] } },
    { title: 'America', options: { ...baseAreaOptions, colors: ['#008b75'] } },
    { title: 'India', options: { ...baseAreaOptions, colors: ['#ffc434'] } },
    { title: 'Indonesia', options: { ...baseAreaOptions, colors: ['#dc3545'] } }
  ]
  return (
    <>
      <div className="page-heading">
        <h3>Profile Statistics</h3>
      </div>
      <div className="page-content">
        <section className="row">
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon purple mb-2">
                          <i className="iconly-boldShow"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Profile Views</h6>
                        <h6 className="font-extrabold mb-0">112.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon blue mb-2">
                          <i className="iconly-boldProfile"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Followers</h6>
                        <h6 className="font-extrabold mb-0">183.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon green mb-2">
                          <i className="iconly-boldAdd-User"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Following</h6>
                        <h6 className="font-extrabold mb-0">80.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon red mb-2">
                          <i className="iconly-boldBookmark"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Saved Post</h6>
                        <h6 className="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Profile Visit</h4>
                  </div>
                  <div className="card-body">
                    <Chart options={optionsProfileVisit} series={seriesProfileVisit} type="bar" height={300} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Profile Visit</h4>
                  </div>
                  <div className="card-body">

                    {areaChartConfigs.map((config, index) => (
                      <div className="row" key={index}>
                        <div className="col-7">
                          <div className="d-flex align-items-center">
                            <div className='size-2 rounded-full bg-blue-700'></div>
                            <h5 className="mb-0 ms-3">{config.title}</h5>
                          </div>
                        </div>
                        <div className="col-5">
                          <h5 className="mb-0 text-end">862</h5>
                        </div>
                        <div className="col-12">
                          <Chart options={config.options} series={baseSeries} type="area" height={80} />
                        </div>
                      </div>

                    ))}
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <div className="card">
                  <div className="card-header">
                    <h4>Latest Comments</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-lg">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Comment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/static/images/faces/5.jpg" />
                                </div>
                                <p className="font-bold ms-3 mb-0">Si Cantik</p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className=" mb-0">Congratulations on your graduation!</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/static/images/faces/2.jpg"/>
                                </div>
                                <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className=" mb-0">Wow amazing design! Can you make another tutorial for
                                                    this design?</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/static/images/faces/8.jpg"/>
                                </div>
                                <p className="font-bold ms-3 mb-0">Singh Eknoor</p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className=" mb-0">What a stunning design! You are so talented and creative!</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/static/images/faces/3.jpg"/>
                                </div>
                                <p className="font-bold ms-3 mb-0">Rani Jhadav</p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className=" mb-0">I love your design! It’s so beautiful and unique! How did you learn to do this?</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card">
              <div className="card-body py-4 px-4">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-xl">
                    <img src="assets/static/images/faces/1.jpg" alt="Face 1"/>
                  </div>
                  <div className="ms-3 name">
                    <h5 className="font-bold">John Duck</h5>
                    <h6 className="text-muted mb-0">@johnducky</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Recent Messages</h4>
              </div>
              <div className="card-content pb-4">
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="assets/static/images/faces/4.jpg"/>
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Hank Schrader</h5>
                    <h6 className="text-muted mb-0">@johnducky</h6>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="assets/static/images/faces/5.jpg"/>
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Dean Winchester</h5>
                    <h6 className="text-muted mb-0">@imdean</h6>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="assets/static/images/faces/1.jpg"/>
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">John Dodol</h5>
                    <h6 className="text-muted mb-0">@dodoljohn</h6>
                  </div>
                </div>
                <div className="px-4">
                  <button className='btn btn-block btn-xl btn-outline-primary font-bold mt-3'>Start Conversation</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Visitors Profile</h4>
              </div>
              <div className="card-body">
                <Chart options={optionsVisitorsProfile} series={seriesVisitorsProfile} type="donut" height={350} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard