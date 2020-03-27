module.exports = {
    "UUID": function (item, head, resultRow, row, colIdx) {

        resultRow["uuid"] = item;

    },
    "VIN": function (item, head, resultRow, row, colIdx) {

        resultRow["vin"] = item;

    },
    "Make": function (item, head, resultRow, row, colIdx) {

        resultRow["make"] = item;

    },
    "Model": function (item, head, resultRow, row, colIdx) {

        resultRow["model"] = item;

    },
    "Mileage": function (item, head, resultRow, row, colIdx) {

        resultRow["mileage"] = item;

    },
    "Year": function (item, head, resultRow, row, colIdx) {

        resultRow["year"] = item;

    },
    "Price": function (item, head, resultRow, row, colIdx) {

        resultRow["price"] = item;

    },
    "ZipCode": function (item, head, resultRow, row, colIdx) {

        resultRow["zipCode"] = item;

    },
    "CreateDate": function (item, head, resultRow, row, colIdx) {

        resultRow["createDate"] = new Date(item);

    },
    "UpdateDate": function (item, head, resultRow, row, colIdx) {

        resultRow["updateDate"] = new Date(item);

    }
}