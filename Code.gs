function url_array_to_sheet() {

  var url = "https://myapibox.vercel.app/api/google/read?google_sheet_id=1d_QazTaI4Awe8fXhoYXRqWE8o02ivy9Vukifgphb5F0&google_sheet_tab=Duplicate&hash=True"

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ulbf - ledger")

  var response = JSON.parse(UrlFetchApp.fetch(url))

  for (var i = 1; i < response.length; i++) {

    for (var j = 1; j < response[i].length; j++) {

      sheet.getRange(i, j).setValue(response[i - 1][j - 1])

      Logger.log(i, j, response[i - 1][j - 1])
    }
  }
}
