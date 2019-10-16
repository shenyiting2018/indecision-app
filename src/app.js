console.log('App.js is running');

// create app object title/subtitle
// JSX - JavaScript XML


var app = {
    title: 'Some title',
    subtitle: 'Some subtitle',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

        <o1>
            <li>Item one</li>
            <li>item two</li>
        </o1>
    </div>
);

var user = {
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
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 17) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);
