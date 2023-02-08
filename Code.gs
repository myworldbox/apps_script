function url_array_to_sheet() {

  var url = "url"

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1")

  var response = JSON.parse(UrlFetchApp.fetch(url))

  for (var i = 0; i <= response.length; i++) {

    for (var j = 0; j <= response[i].length; j++) {

      sheet.getRange(i + 1, j + 1).setValue(response[i][j])

      Logger.log(i, j, response[i][j])
    }
  }
}
