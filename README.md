<h1 align="center"> react-awesome-mega-menu </h1>

<p>The package will generate a mega menu up to 10 columns </p>

<h3> Notes </h3>

<ul>
  <li>The mega menu will take the entire width and height of the pareant container</li>
  <li>The width of each mega menu columns is decided by the maximum depth of the nodeList (The menu isn't responsive.Hope to fix this soon :) </li>
  <li> If itemId is specified in a node, onNodeClick will outputs the selected item with provided itemId </li>
</ul>

| Attribute       |  Type  | Default Values |                                       Description |
| --------------- | :----: | -------------: | ------------------------------------------------: |
| nodeList        | array  |             [] |                             Node List description |
| width           | string |         "100%" |                            Width of the mega menu |
| height          | string |         "100%" |                           Height of the Mega menu |
| itemIdSeperator | string |            "/" |                         Node identifier seperator |
| onNodeClick     |  func  |                | Function to invoke when mega menu item is clicked |

<h3> Samples </h3>
<a href="/resources/NodeList.js">View sample nodeList object </a>

```shell
import MegaMenu from "react-awesome-mega-menu";
<MegaMenu nodeList={nodeList} onNodeClick={val => console.log(val)} />
```

![alt text](/resources/react-awesome-mega-menu.gif "Mega menu in action")

<h3> Installation </h3>

```shell
$ npm i react-awesome-mega-menu --save
```

<h3>Contributing</h3>
Keep it simple. Keep it minimal.

<h3>Authors or Acknowledgments</h3>
<ul>
<a href="https://www.linkedin.com/in/hasithajayasundara/"> Hasitha Jayasundara </a>
</ul>

<h3>License</h3>

This project is licensed under the ISC License
