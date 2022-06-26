import view from './view.js'

export default class extends view{
    constructor(){
        super();
        this.setTitle("About");
    }

    async getHtml(){
        return `

        <div class="text">
        <h1>What we do at Meowie</h1>
        <p>Meowies lets you upload pictures of your cats, so that you never lose them. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi eveniet fugit veritatis. Id temporibus explicabo enim sunt, officiis sapiente.
    </div>

    <div>
        <img src="/static/cats2.jpg" alt="cat image with pink backgrounnd" class="img">
    </div>
        
       
    
        `;
    }
}