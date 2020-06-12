
  // Rendering Faq's

 
  displayGeneralFaqs(faqs);
  displayBookingFaq(faqs);
  displaySupportFaq(faqs)

  function displayGeneralFaqs(faqs){
    var generalHtml=""
    var bookingHtml=""
    faqs.forEach((faq,index)=>{
      console.log(faq)
      if(faq.type == "general"){
      var question = faq.question
      var answer =faq.answer
      generalHtml += `
      <div class="faq-item" id="general">
      <div class="faq-question">
        ${question}

      </div>

      <div class="faq-answer">
          <div class="faq-answer-content">
             ${answer}
          </div>
      </div>
  </div>`
      }
    
    }) 



    document.querySelector('#generalQue').innerHTML=generalHtml
    
  }

  function displayBookingFaq(faqs){
    var bookingHtml=""
    faqs.forEach((faq,index)=>{
      console.log(faq)
      if(faq.type == "booking"){
      var question = faq.question
      var answer =faq.answer
      bookingHtml += `
      <div class="faq-item" id="general">
      <div class="faq-question">
        ${question}

      </div>

      <div class="faq-answer">
          <div class="faq-answer-content">
             ${answer}
          </div>
      </div>
  </div>`
      }
    
    })
    document.querySelector('#bookQue').innerHTML=bookingHtml
  }

  function displaySupportFaq(faqs){
    var supportHtml=""
    faqs.forEach((faq,index)=>{
      console.log(faq)
      if(faq.type == "support"){
      var question = faq.question
      var answer =faq.answer
      supportHtml += `
      <div class="faq-item" id="general">
      <div class="faq-question">
        ${question}

      </div>

      <div class="faq-answer">
          <div class="faq-answer-content">
             ${answer}
          </div>
      </div>
  </div>`
      }
    
    })
    document.querySelector('#supportQue').innerHTML=supportHtml
  }