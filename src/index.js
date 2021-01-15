import React from 'react';
import ReactDOM from 'react-dom';
import MyDocument from './myDocument';
import { PDFViewer } from '@react-pdf/renderer';

const App = () => (
	<div style={{ height: '100vh', width: '100vw' }}>
		<PDFViewer width='100%' height='100%'>
			<MyDocument />
		</PDFViewer>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
