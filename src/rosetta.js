// Rosetta
// Created on 2015-12-27 by Philip Guo

/* TODOs

- remember to add 'key' field for object constancy

*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'd3';

//import _ from 'underscore';
//console.log(_);

import {RNumber, RString, RSymbol, RPointer} from 'rprimitive';
import {RElement} from 'relement';
import {RCollection} from 'rcollection';
import {StepVisualizer} from 'stepVisualizer';


var f = <RNumber typeTag="float"
          data={123.4567890}
          renderNumberFunc={(x) => d3.round(x, 3)} />;

var s = <RString data={"Hello, <b>world!</b>"} />;

var b = <RSymbol typeTag="bool"
          data={"True"} />;

var i = <RNumber typeTag="int"
          data={-123.4567890}
          renderNumberFunc={(x) => d3.round(x, 0)} />;

var p1 = <RPointer typeTag="ptr" data={{start: 'fooId', end: 'barId'}} />;
var p2 = <RPointer typeTag="ptr" data={{start: 'foo2Id', end: 'bar2Id'}} />;

var sym = <RSymbol data={"globalX"} />;

ReactDOM.render(f, document.getElementById("primitiveDiv1"));
ReactDOM.render(s, document.getElementById("primitiveDiv2"));
ReactDOM.render(b, document.getElementById("primitiveDiv3"));
ReactDOM.render(i, document.getElementById("primitiveDiv4"));
ReactDOM.render(sym, document.getElementById("primitiveDiv5"));


var e1 = <RElement isVertical={true} key="e1" k={s} v={f} />;

var e2 = <RElement isVertical={false} key="e2" k={s} v={i} />;

var e3 = <RElement isVertical={true} key="e3" k={sym} v={p1} />;

var e4 = <RElement isVertical={false} key="e4" k={sym} v={p2} />;

var e5 = <RElement isVertical={false} key="e5"
           k={<RNumber typeTag="float"
               data={123.4567890}
               renderNumberFunc={(x) => d3.round(x, 3)} />}
           v={<RString data={"Hello, <b>world!</b>"} />} />;

var e6 = <RElement isVertical={true} key="e6" k={sym} v={i} />;

ReactDOM.render(e1, document.getElementById("elementDiv1"));
ReactDOM.render(e2, document.getElementById("elementDiv2"));
ReactDOM.render(e3, document.getElementById("elementDiv3"));
ReactDOM.render(e4, document.getElementById("elementDiv4"));
ReactDOM.render(e5, document.getElementById("elementDiv5"));
ReactDOM.render(e6, document.getElementById("elementDiv6"));

ReactDOM.render(
  <RCollection layout="HorizontalLayout" name="array" elts={[e1, e3, e6]} />,
  document.getElementById("collectionDiv1"));

ReactDOM.render(
  <RCollection layout="VerticalLayout" name="dict" elts={[e2, e4, e5]} />,
  document.getElementById("collectionDiv2"));

ReactDOM.render(
  <RCollection layout="GridLayout" name="set"
    ncols={3}
    elts={[e1, e2, e3, e4, e5]} />,
  document.getElementById("collectionDiv3"));

var sv = <StepVisualizer></StepVisualizer>

ReactDOM.render(sv, document.getElementById("stepViz"));
