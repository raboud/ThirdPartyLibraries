/*
* ig_webdragdrop.js
* Version 12.1.20121.2236
* Copyright(c) 2001-2013 Infragistics, Inc. All Rights Reserved.
*/


//alert('ig_webdragdrop.js');
ig_ScheduleDragDrop = function(info)
{
	this._info = info;
	this.addView = function(view)
	{
//alert('view:'+view._clientID+':'+this._info._clientID);
	}
}
