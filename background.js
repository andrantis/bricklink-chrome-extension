chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Bricklink Part-Out value for' + ' "%s"',
    id: 'commandId',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function (item, tab) {
  const legoset = item.selectionText.match(/\d{5}/)[0];
  const url = `https://www.bricklink.com/catalogPOV.asp?itemType=S&itemNo=${legoset}&itemSeq=1&itemQty=1&breakType=M&itemCondition=N&incInstr=Y&incParts=Y`;
  chrome.tabs.create({ url: url, index: tab.index + 1 });
});
