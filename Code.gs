function url_array_to_sheet() {

  var url = "url"

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1")

  var response = JSON.parse(UrlFetchApp.fetch(url))

  for (var i = 1; i < response.length; i++) {

    for (var j = 1; j < response[i].length; j++) {

      sheet.getRange(i, j).setValue(response[i - 1][j - 1])

      Logger.log(i, j, response[i - 1][j - 1])
    }
  }
}
