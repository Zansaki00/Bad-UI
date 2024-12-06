import React from 'react'
import BadCircle from '../components/badCircle/badCircle';
import './chaos.css'

function chaos() {
  return (
    <body >
    <div class='container1'>
    <input type='text' style={{
      width:'50%'
  }}/>
    <p class="txt1">Recently, we asked the followers of PADI's Instagram page to share some of their favorite and most inspiring ocean quotes about diving and the underwater world. While we all know the classics, you might be surprised by some of the more unique answers we received.</p>
    <p class="txt2">Yet, a high number were also related to ocean conservation. And as there's never a bad time to talk about or promote saving the marine world, here are some of our favorite quotes to help educate others and inspire you to protect our oceans.

</p>
    </div>  
    <div class='container2'>
    <p class="txt2" style={{color:"#5500ff"}}>But these aren't the only words of wisdom Dr. Earle, founder of Mission Blue, has given us. Her book, The World Is Blue: How Our Fate and the Ocean’s Are One, is filled with lessons worth listening to, meaningful mantras and just enough optimism for the future. Inside, she writes:
“Even if you never have the chance to see or touch the ocean, it touches you with every breath you take, every drop of water you drink, every bite you consume. Everyone, everywhere is inextricably connected to and utterly dependent upon the existence of the sea.”
“If you think the ocean isnt important, imagine Earth without it. Mars comes to mind. No ocean, no life support system.”</p>
    <p class="txt1" style={{color:"#5500ff"}}>Every Citizen Can (and Should) Be Part of the Solution
Ma Jun, an environmentalist, journalist and National Geographic Explorer, shares the view that the responsibility to save the ocean falls on everyone, including the public. He said:
“At the end of the day, the government and local government all bow to public pressure….[Regulatory] enforcement is weak, and environmental litigation is near to impossible. So there’s an urgent need for extensive public participation to generate another kind of motivation.”.</p>    
    </div>
    <div class="bottomContent" >
    <div style={{  position: "absolute",top: '90%',left: '10%'}}>
    <BadCircle/>
    </div>
    <div style={{  position: "absolute",top: '90%',left: '50%'}}>
    <BadCircle/>
    </div>
    <div style={{  position: "absolute",top: '90%',left: '80%'}}>
    <BadCircle/>
    </div>
    </div>
    </body>
  );
}

export default chaos