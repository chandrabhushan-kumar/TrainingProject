import React,{Component} from 'react';
import { Doughnut, Pie, Bar, Radar, Polar, } from 'react-chartjs-2';
import './DashBoard.css';


export default class DashBoard extends Component{

    constructor(props){
		super(props);

		this.state = {
			chartData : {
						    datasets: [{
						        
						        data: [100,160, 230, 320],

								backgroundColor: [
					                'rgba(255, 99, 132, 1)',
					                'rgba(155, 199, 132, 1)',
					                'rgba(54, 162, 235, 1)',
					                'rgba(255, 206, 86, 0.9)',
					            ],

						    }],

						    
						    labels: [
						    	'Alpha Romeo',
						        'Mercedes',
						        'BMW',
						        'Audi'
						    ],
							 options: {
							        scales: {
							            yAxes: [{
							                ticks: {
							                    beginAtZero: true
							                }
							            }]
							        }
							    }						    
						}
		}
	}

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-10 col-xs-12 dboard">
                        <h1>DASHBOARD </h1>
                    </div>         
                </div>
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">    
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 board1">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 sboard1">
                              <span><i className="fas fa-cog"></i></span>
                            </div>
                        </div>
                        <div className="ctraffic">CPU TRAFFIC <span className="number">90%</span></div>    
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 board1">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 sboard2">
                                <span><i className="fab fa-google-plus-g"></i></span>
                            </div>
                      </div>
                      <div className="like">LIKES <br/>
                      <span className="Number1">41410</span> </div>   
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 board1">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 sboard3">
                                <span><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                        <div className="Sales">Sales <br/>
                            <span className="Number2">760</span> 
                     </div>   
                 </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 board1">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 sboard4">
                                <span><i class="fas fa-users"></i></span>
                            </div>
                        </div>
                            <div className="Nmembers">NEW MEMBERS <br/>
                                <span className="Number2">1200</span> 
                            </div>
                    </div>
                </div>
            </div>
            <section>
            
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 chart1">
                    <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3">
                        <Doughnut 
                            data={this.state.chartData} 
                        />
                    </div>
                    <div className="col-lg-4 col-md-3  col-sm-3 col-xs-3">
                        <Pie 
                             data={this.state.chartData} 
                        />
                    </div>
                     <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                    
                        <Polar 
					        data={this.state.chartData} 
					    />
                
                   </div>  
                    
                

                </div>
                

             
                 <div className="col-lg-12 col-md-10 col-sm-12 col-xs-12 chart2">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <Bar
                            data={this.state.chartData} 
                        />
                    </div>
                    <div className="col-lg-6 col-md-6  col-sm-6 col-xs-6">
                        <Radar 
                             data={this.state.chartData} 
                        />
                    </div>

                </div> 
            
            
                   
                 
                               
						
							
							 

							
							
				
						
					

            </section>
         </div>         
         )
    }
}