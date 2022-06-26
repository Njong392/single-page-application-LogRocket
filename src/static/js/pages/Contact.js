import view from './view.js'

export default class extends view{
    constructor(){
        super();
        this.setTitle("Contact us");
    }

    async getHtml(){
        return `

      
        <div class="text">
       <h1>Get to us to make a custom album for your cat</h1>
       <p>Meowies lets you upload pictures of your cats, so that you never lose them. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi eveniet fugit veritatis. Id temporibus explicabo enim sunt, officiis sapiente.
       
   </div>

   <div>
       <img src="/static/cats3.jpg" alt="two cats holding each other" class="img">
   </div>
        
       
       
    
        `;
    }
}