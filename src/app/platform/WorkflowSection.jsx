import React from 'react';
import Image from 'next/image';

export default function WorkflowSection() {
   

    return (
        <div className='layout-section platform-class'>

            <h2 className='workflow-heading'>Workflow</h2>


            <div className='workflow-card'>
                <div>
                    <Image src="/Images/platform/ai.png" alt='loading' width={60} height={58} />
                <h5 className='platform-title'>AI-powered data capture</h5>
                <p className="platform-bottom">collects critical data from construction<br /> sites including Carbon Emissions, Material Usage, Water & Energy Consumption, Waste Recycling Rates, Worker Welfare Compliance, In-Country Value (ICV) Score, etc.</p>
                </div>
                <div>
                <Image src="/Images/platform/blockchain.png" alt='loading' width={60} height={58} />
                <h5 className='platform-title'>Blockchain Integration</h5>
                <p className="platform-bottom">Securely stores captured data on a <br /> blockchain platform for immutability <br /> and transparency.</p>
                </div>
                <div>
                <Image src="/Images/platform/human.png" alt='loading' width={60} height={58} />
                <h5 className='platform-title'>Human Verification</h5>
                <p className="platform-bottom">A designated verifier <br /> meticulously reviews all captured <br />
                 information for accuracy.</p>
                </div>
                       
                    </div>
                    <div className='workflowsecond-card'>
                <div>
                <Image src="/Images/platform/automated.png" alt='loading' width={60} height={58} />
                <h5 className='platform-title'>Automated Sustainability Rating</h5>
                <p className="platform-bottom">Advanced algorithms calculate each contractor's sustainability rating based on collected data.</p>
                </div>
        
                <div>
                <Image src="/Images/platform/detail.png" alt='loading' width={60} height={58} />
                <h5 className='platform-title'>Detailed Scorecards</h5>
                <p className="platform-bottom">Generate reports providing a clear and objective assessment of environmental and social performance..</p>
                </div>
                       
                    </div>
              
            </div>

       
    )
}
