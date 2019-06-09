<h1 align="center"> react-awesome-megamenu </h1>

<p>The package will generate a mega menu up to 10 columns </p>

<h3> Notes </h3>

<ul>
  <li>The mega menu will take the entire width and height of the pareant container</li>
  <li>The width of each mega menu columns is decided by the maximum depth of the nodeList</li>
  <li> If itemId is specified in a node, onNodeClick will outputs the selected item with provided itemId </li>
</ul>

| Attribute       |  Type  | Default Values |                                    Description |
| --------------- | :----: | -------------: | ---------------------------------------------: |
| nodeList        | array  |             [] |                          Node List description |
| width           | string |         "100%" |                         Width of the mega menu |
| height          | string |         "100%" |                        Height of the Mega menu |
| itemIdSeperator | string |            "/" |                      Node identifier seperator |
| onNodeClick     |  func  |                | Function to invoke when mega menu item clicked |

<h3> Demo </h3>

<a href="#"> Demo </a>

<h3> Code Demo </h3>
```json

let nodeList = [ { name: "Fashion", imageURL:
"", itemId: "fashion",
nodes: [ { name: "Women", imageURL:
"", nodes: [ {
name: "Trousers", nodes: [] }, { name: "Top", nodes: [] }, { name: "Skirt",
nodes: [] } ] }, { name: "Men", nodes: [ { name: "Caps", nodes: [{ name:
"Addidas" }, { name: "Calvin" }] }, { name: "Shoes", nodes: [] }, { name:
"Shirts & Polos", nodes: [ { name: "Shirts", imageURL:
"", nodes: [] }, { name:
"T-shirt", nodes: [] } ] }];

````
```html
<MegaMenu nodeList={nodeList}
onNodeClick={val => console.log(val)} />
````

<h3> Download & Installation </h3>

```shell
$ npm i react-awesome-megamenu --save
```

<h3>Contributing</h3>
Keep it simple. Keep it minimal.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>[Hasitha Jayasundara](https://www.linkedin.com/in/hasithajayasundara/)</li>
</ul>

<h3>License</h3>

This project is licensed under the ISC License
