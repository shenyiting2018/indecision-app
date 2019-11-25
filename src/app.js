console.log('App.js is running');

// create app object title/subtitle
// JSX - JavaScript XML


const app = {
    title: 'Some title',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

        <ol>
            <li>Item one</li>
            <li>item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Yiting',
    age: 25,
    location: 'Shaan xi'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
    return 'unknown';
}
let count = 0;
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button id="my-id" className="button">+1</button>
    </div>
);
//console.log(template);
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);
