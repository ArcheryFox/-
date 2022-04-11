class TextMessage {
    constructor({text, onComplete}) {
        this.text = text;
        this.onComplete = onComplete;
        this.el = document.getElementsByClassName(".conteinerCanv");
        this.element = null
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("TextMessage")

        this.element.innerHTML = (` 
        <p class="TextMessage_p"></p>
        <button class="TextMessage_button">Next</button>
        `);
        this.revealingText = new RevealingText({
            element: this.element.querySelector(".TextMessage_p"),
            text: this.text
        })

        this.element.querySelector("button").addEventListener("click", () => {
            //closin msg
            this.done();
        })
        this.actionListener = new KeyPressListener("Enter", () => {
            this.done();
        })
    }
    
    done() {
        if (this.revealingText.isDone) {
            this.element.remove();
            this.actionListener.unbind();
            this.onComplete();  
        } else {
            this.revealingText.warpToDone()
        }
        
    }

    init(conteiner) {
        this.createElement();
        conteiner.appendChild(this.element);
        this.revealingText.init()
    }
} 