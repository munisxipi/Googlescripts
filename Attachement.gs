// Logs information about any attachments in the first 100 inbox threads.
var threads = GmailApp.getInboxThreads(0, 100);
var msgs = GmailApp.getMessagesForThreads(threads);
for (var i = 0 ; i < msgs.length; i++) {
  for (var j = 0; j < msgs[i].length; j++) {
    var attachments = msgs[i][j].getAttachments();
    for (var k = 0; k < attachments.length; k++) {
      Logger.log('Message "%s" contains the attachment "%s" (%s bytes)',
                 msgs[i][j].getSubject(), attachments[k].getName(), attachments[k].getSize());
    }
  }
}
