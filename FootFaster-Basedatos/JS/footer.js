
          const modal_container = document.getElementById("modal_container")
          const modal_btn2 = document.getElementById("modal_btn2")
        
          modal_btn2.addEventListener("click", () => {
              createModal(`
              <br>
              <center>
                <form class="form">
                  <div class="title">Contactanos</div>
                  <input type="text" placeholder="Tu email" class="input">
                  <textarea placeholder="Tu mensaje"></textarea>
                  
                  <button>Submit</button>
                </form>
              </center>
            `,"modal-desdeAbajo" )
          })
        
          const createModal = (content = "sin contenido", style = "") => {
            modal_container.innerHTML = `
              <div class="modal" id="modal">
                <div class="modal-content ${style}">
                  ${content}
                  <button class="modal-btn-closed" id="modal_btn_closed">x</button>
                </div>
              </div>
            `
        
            document.getElementById("modal").addEventListener("click", (e) => {
              console.log(e.target.id)
              if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
                modal_container.innerHTML = ""
              }
            })
          }