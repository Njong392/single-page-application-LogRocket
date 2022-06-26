import view from './view.js'

export default class extends view{
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHtml(){
        return `

        <div class="text">
            <h1>An album for your cuties</h1>
            <p>Meowies lets you upload pictures of your cats, so that you never lose them. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi eveniet fugit veritatis. Id temporibus explicabo enim sunt, officiis sapiente.
            Read <a href="/about" data-link class="link">about</a> us here </p>
        </div>

        <div>
            <img src="/static/cats.jpg" alt="cat in ribbons" class="img">
        </div>
    
        `;
    }
}