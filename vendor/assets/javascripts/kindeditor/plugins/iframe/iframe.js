KindEditor.plugin('iframe', function(K) {
  var self = this, name = 'iframe';
  self.plugin.iframe = {
    edit : function() {
      var lang = self.lang(name + '.'),
        html = '<div style="padding:20px;">' +
          '<div class="ke-dialog-row">' +
          '<label for="keUrl" style="width:60px;">' + lang.url + '</label>' +
          '<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:260px;" /></div>' +
          '<div class="ke-dialog-row">' +
          '<label for="remoteWidth" style="width:60px;">' + lang.size + '</label>' +
          lang.width + ' <input type="text" id="remoteWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> ' +
          lang.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> ' +      
          '</div>' +
          '</div>',
        dialog = self.createDialog({
          name : name,
          width : 450,
          title : self.lang(name),
          body : html,
          yesBtn : {
            name : self.lang('yes'),
            click : function(e) {
              var url = K.trim(urlBox.val()),
                width = widthBox.val(),
                height = heightBox.val();
              if (url == 'http://' || K.invalidUrl(url)) {
                alert(self.lang('invalidUrl'));
                urlBox[0].focus();
                return;
              }
              self.exec('createIframe', url, width, height).hideDialog().focus();
            }
          }
        }),
        div = dialog.div,
        urlBox = K('input[name="url"]', div),
        widthBox = K('input[name="width"]', div),
        heightBox = K('input[name="height"]', div);
      urlBox.val('http://');
    }
  };
  self.clickToolbar(name, self.plugin.iframe.edit);
});
