/*
* Youtube Embed Plugin
*
* @author Jonnas Fonini <jonnasfonini@gmail.com>
* @version 2.1.18
*/
(function () {
	CKEDITOR.plugins.add('youtube', {
		lang: 'en,bg,pt,pt-br,ja,hu,it,fr,tr,ru,de,ar,nl,pl,vi,zh,el,he,es,nb,nn,fi,et,sk,cs,ko,eu,uk',
		init: function (editor) {
			editor.addCommand('youtube', new CKEDITOR.dialogCommand('youtube', {
				allowedContent: 'div{*}(*); iframe{*}[!width,!height,!src,!frameborder,!allowfullscreen,!allow]; object param[*]; a[*]; img[*]'
			}));

			editor.ui.addButton('Youtube', {
				label : editor.lang.youtube.button,
				toolbar : 'insert',
				command : 'youtube',
				icon : this.path + 'images/icon.png'
			});

			CKEDITOR.dialog.add( 'youtube', this.path + 'dialogs/youtube.js' );
		}
	});
})();
