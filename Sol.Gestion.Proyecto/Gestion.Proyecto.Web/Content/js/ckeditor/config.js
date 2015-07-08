/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

//CKEDITOR.editorConfig = function( config )
//{
//	// Define changes to default configuration here. For example:
//	// config.language = 'fr';
//	// config.uiColor = '#AADC6E';
//};
CKEDITOR.editorConfig = function(config) {
    config.resize_enabled = false;
    config.toolbar = 'myToolBar';
    config.toolbar_myToolBar =
                [
                   
                    ['Bold','NumberedList', 'BulletedList',  'Outdent', 'Indent']
                    
                  ];

};