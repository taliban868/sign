



function firstPage() {
  document.getElementById('number')
   .innerHTML = `
   <div class="steps">
          <span class="step1 on">1</span>
        <div class="stepss">
          <p class="step"> STEP 1</p>
          <p class="info"> YOUR INFO</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step2">2</span>
        <div class="stepss">
          <p class="step"> STEP 2</p>
          <p class="info"> SELECT PLANS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1 ">3</span>
        <div class="stepss">
          <p class="step"> Step 3</p>
          <p class="info">ADD-ONS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1 ">4</span>
        <div class="stepss">
          <p class="step"> STEP 4</p>
          <p class="info">SUMMARY</p>
        </div> 
        </div>
   `;

   document.getElementById('pageContainer')
    .innerHTML = `
    <div class="personal-container">
          <h1 class="title" id="title">Personal info</h1>
          <p class="description" id="description">
            Please provide your name, email address, and phone number.
          </p> 
          <br>
        <label for="" class="labels">Name</label> 
        <input type="text" name="" id="personName" placeholder="e.g. Stephen King" class="personal"> 

          <label for="" class="labels">Email Address</label>
          <input type="email" name="" id="personEmail" placeholder="e.g. stephenking@lorem.com" class="personal">

          <label for="" class="labels">Phone Number</label> 
          <input type="tel" name="" id="personNumber" placeholder="e.g. +1 234 567 890" class="personal"> 
          <br>
        </div>
        <div class="footer">
          <div class="first-bottom-section">
            <button class="next-button" id="button1" onclick="secondPage()">Next Step</button>
           </div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  console.log('DOM fully loaded and parsed');
  
  checkbox.addEventListener('change', function() {
    console.log('Checkbox state changed:', this.checked);
    if (this.checked) {
      changePrice();
    } else {
      revertPrice();
    }
  });

  function changePrice() {
    console.log('Changing prices to yearly');
    document.querySelector('.arcade-price').innerText = `$90/yr`;
    document.querySelector('.adv-price').innerText = `$120/yr`;
    document.querySelector('.pro-price').innerText = `$150/yr`;
  }

  function revertPrice() {
    console.log('Reverting prices to monthly');
    document.querySelector('.arcade-price').innerText = `$9/mo`;
    document.querySelector('.adv-price').innerText = `$12/mo`;
    document.querySelector('.pro-price').innerText = `$15/mo`;
  }
});

function secondPage() {
  document.getElementById('pageContainer')
   .innerHTML = `
   <div class="plan-container">
          <h1 class="title" id="title">Select your plan</h1>
        <p class="description" id="description">
          You have the option of monthly or yearly billing.
        </p> 
        <br>
        <div class="plans">
          <input type="radio" value="" name="plan" id="arcade" onclick="">
          <label for="arcade" class="options">
            <img src="assets/images/icon-advanced.svg" alt="" srcset="">
            <p class="plan-type">Arcade</p>
            <p class="type-price arcade-price">$9/mo</p>
          </label>
          

          <input type="radio" value="" name="plan" id="advanced" onclick="">
          <label for="advanced" class="options">
            <img src="assets/images/icon-arcade.svg" alt="" srcset="">
            <p class="plan-type ">Advanced</p>
            <p class="type-price adv-price">$12/mo</p>
          </label>
          

          <input type="radio" value="" name="plan" id="pro" onclick="">
          <label for="pro" class="options">
            <img src="assets/images/icon-pro.svg" alt="" srcset="">
            <p class="plan-type">Pro</p>
            <p class="type-price pro-price">$15/mo</p>
          </label>
          
        </div>

        <div class="sliderr">
          <p class="monthly color">Monthly</p>
          <label class="switch">
            <input type="checkbox" id="checkbox">
            <span class="slider round"></span>
          </label>
          <p class="yearly color-off">Yearly</p>
       
          
      </div>
        </div>
        
      <div class="footer">
        <div class="bottom-section">
          <a href="#" class="backk" onclick="firstPage()">Go Back</a>
          <button class="next-button" onclick="thirdPage()">Next Step</button>
        </div>
      </div>
   `;

   document.getElementById('number')
    .innerHTML = `
    <div class="steps">
          <span class="step1 ">1</span>
        <div class="stepss">
          <p class="step"> STEP 1</p>
          <p class="info"> YOUR INFO</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step2 on">2</span>
        <div class="stepss">
          <p class="step"> STEP 2</p>
          <p class="info"> SELECT PLANS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1 ">3</span>
        <div class="stepss">
          <p class="step"> Step 3</p>
          <p class="info">ADD-ONS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1">4</span>
        <div class="stepss">
          <p class="step"> STEP 4</p>
          <p class="info">SUMMARY</p>
        </div> 
        </div>
    `;
}




function thirdPage() {
  document.getElementById('number')
   .innerHTML = `
   <div class="steps">
          <span class="step1 ">1</span>
        <div class="stepss">
          <p class="step"> STEP 1</p>
          <p class="info"> YOUR INFO</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step2">2</span>
        <div class="stepss">
          <p class="step"> STEP 2</p>
          <p class="info"> SELECT PLANS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1 on">3</span>
        <div class="stepss">
          <p class="step"> Step 3</p>
          <p class="info">ADD-ONS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1 ">4</span>
        <div class="stepss">
          <p class="step"> STEP 4</p>
          <p class="info">SUMMARY</p>
        </div> 
        </div>
   `;

   document.getElementById('pageContainer')
    .innerHTML = `
    <div class="addons-container">
          <h1 class="title" id="title">Pick add-ons</h1>
          <p class="description" id="description">
            Add-ons help enhance your gaming experience.
          </p> 
          <br>
          <div class="addons">
            <input type="checkbox" name="addOn" id="online">
            <label for="online" class="box">
              <div class="addon-container">
                <p class="addon-pack">Online service</p> 
              <p class="addon-des">Access to multiplayer games</p>
              </div>
              <div class="addon-prices">
                <p class="addon-price" id="addonPrice">+$1/mo</p>
              </div>
             
            </label>
            

            <input type="checkbox" name="addOn" id="larger">
            <label for="larger" class="box">
              <div class="addon-container">
                <p class="addon-pack">Larger storage</p>
                <p class="addon-des">Extra 1TB of cloud save</p>
              </div>
              <div class="addon-prices">
                <p class="addon-price" id="addonPrice">+$2/mo</p>
              </div>
             
            </label>
            

            <input type="checkbox" name="addOn" id="custom">
            <label for="custom" class="box">
              <div class="addon-container">
                <p class="addon-pack">Customizable Profile</p>
                <p class="addon-des">Custom theme on your profile</p>
              </div>
              <div class="addon-prices">
                <p class="addon-price" id="addonPrice">+$2/mo</p>
              </div>
              
            </label>
            
          </div>

        </div>
        
          <div class="footer">
            <div class="bottom-section">
              <a href="#" class="backk" onclick="secondPage()">Go Back</a>
              <button class="next-button" onclick="forthPage()">Next Step</button>
            </div>
          </div>
    `;
}

function forthPage() {
  document.getElementById('number')
   .innerHTML = `
   <div class="steps">
          <span class="step1 ">1</span>
        <div class="stepss">
          <p class="step"> STEP 1</p>
          <p class="info"> YOUR INFO</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step2">2</span>
        <div class="stepss">
          <p class="step"> STEP 2</p>
          <p class="info"> SELECT PLANS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1">3</span>
        <div class="stepss">
          <p class="step"> Step 3</p>
          <p class="info">ADD-ONS</p>
        </div> 
        </div>
        <div class="steps">
          <span class="step1 on">4</span>
        <div class="stepss">
          <p class="step"> STEP 4</p>
          <p class="info">SUMMARY</p>
        </div> 
        </div>
   `;

   document.getElementById('pageContainer')
    .innerHTML = `
    <div class="summary-container">
          <h1 class="title" id="title">Finishing up</h1>
          <p class="description" id="description">
            Double-check everything looks OK before confirming.
          </p> 
          <br>
          <div class="summary">
            <div class="summary-padding">
              <div class="top-summary">
                <div class="plan-summary">
                  <div class="top">
                    <p class="splan">Arcade (Monthly)</p>
                    <a href="#">Change</a>
                  </div>
                  
                  <div class="plan-price-sum">
                    <p>$9/mo</p>
                  </div>
                </div>
                <div class="addons-summary">
                  <div class="each-addons">
                    <p class="addon-sum">Online service</p>
                  <p class="addon-price">+$1/mo</p>
                  </div>
                  <div class="each-addons">
                    <p class="addon-sum">Online service</p>
                  <p class="addon-price">+$2/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-summary">
            <div class="each-addons">
              <p class="total">Total (per month)</p>
              <p class="total-price">$12/mo</p>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <div class="bottom-section">
            <a href="#" class="backk" onclick="thirdPage()">Go Back</a>
            <button class="confirm-button" onclick="finalPage()">Confirm</button>
          </div>
        </div>
    `;
}

function finalPage() {
  document.getElementById('pageContainer')
   .innerHTML = `
     <div class="final-container">
          <div class="final-padding">
            <img src="assets/images/icon-thank-you.svg" alt="" srcset="">
          <p class="final-text">Thank you!</p>
          <p class="final-greeting">
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
          </p>
          </div>
        </div>
        <div class="footer disappear">
          <div class="first-bottom-section">
            <button class="next-button disappear" id="button1">Next Step</button>
          </div>
   `;
}

