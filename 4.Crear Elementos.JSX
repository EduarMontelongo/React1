
import React, { Component } from 'react';
import render
'react-dom';
const node = document.getElementById('root');
const root =
	React.createElement('div', {}, //
	 React.createElement('hl', {}, "Hello, world!", //
	  React.createElement('a', (href: 'mailto:mark@ifelse.io'},
	   React.createElement('hl', {}, "React In Action"),
	   React.createElement('em', {}, "...and now it really is!")
)
)
);
render (root, node); //