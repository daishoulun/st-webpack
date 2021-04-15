import _ from 'lodash'
import './index.css'
import Icon from './a.jpg'
import dataCsv from './data.csv'
import dataXml from './data.xml'
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
console.log(toml);
console.log(yaml);
console.log(json);
function component() {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'world!'], ' ')
  element.classList.add('hello')
  const myImage = new Image()
  myImage.src = Icon
  element.append(myImage)
  console.log(dataCsv, dataXml)
  return element
}
document.body.appendChild(component())
