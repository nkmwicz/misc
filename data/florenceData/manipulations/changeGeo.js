const fs = require('fs/promises');
// 140 soldi = 7 lire = 1 scudo

const readJson = async () => {
  try {
    const promise = await fs.readFile('./florence1561.json', 'utf-8');
    const data = JSON.parse(promise);
    const newArray = [];
    data.forEach(value => {
      const {
        attributes: {
          OBJECTID,
          Y,
          X,
          fol_,
          Entry_Numb,
          Quartiere,
          Popolo,
          Street,
          Loc_Info,
          Bldg_Desc,
          Bottega,
          rents,
          rents_lire,
          rents_scudi,
          rents_in_scudi = rents_lire ? rents_lire / 7 : rents_scudi,
          value_,
          M,
          F,
          bocche,
          Holding_Type,
          Bool_Sublet,
          Contract_Main,
          Contract_Sub,
          Bool_Inhabited,
          Bool_TenisRes1,
          Owner,
          Type_Own,
          Title_Own,
          N1_Own,
          N2_Own,
          N3_Own,
          N4_Own,
          Occ_Own,
          Tenant,
          Type_Ten,
          Title_Ten,
          N1_Ten,
          N2_Ten,
          N3_Ten,
          N4_Ten,
          Occ_Ten,
          Resident_1,
          Type_Res1,
          N1_Res1,
          N2_Res1,
          N3_Res1,
          N4_Res1,
          Occ_Res1,
          Resident_2,
          Type_Res2,
          Title_Res2,
          N1_Res2,
          N2_Res2,
          N3_Res2,
          N4_Res2,
          Occ_Res2,
          Resident_3,
          Type_Res3,
          Title_Res3,
          N1_Res3,
          N2_Res3,
          N3_Res3,
          N4_Res4,
          Occ_Res3,
          Serial_Num,
          Date_Enter,
          Notes,
        },
      } = value;
      const newEntry = {
        type: 'Feature',
        attributes: {
          OBJECTID,
          Y,
          X,
          fol_,
          Entry_Numb,
          Quartiere,
          Popolo,
          Street,
          Loc_Info,
          Bldg_Desc,
          Bottega,
          rents,
          rents_lire,
          rents_scudi,
          rents_in_scudi,
          value_,
          M,
          F,
          bocche,
          Holding_Type,
          Bool_Sublet,
          Contract_Main,
          Contract_Sub,
          Bool_Inhabited,
          Bool_TenisRes1,
          Owner,
          Type_Own,
          Title_Own,
          N1_Own,
          N2_Own,
          N3_Own,
          N4_Own,
          Occ_Own,
          Tenant,
          Type_Ten,
          Title_Ten,
          N1_Ten,
          N2_Ten,
          N3_Ten,
          N4_Ten,
          Occ_Ten,
          Resident_1,
          Type_Res1,
          N1_Res1,
          N2_Res1,
          N3_Res1,
          N4_Res1,
          Occ_Res1,
          Resident_2,
          Type_Res2,
          Title_Res2,
          Resident_2,
          Type_Res2,
          Title_Res2,
          N1_Res2,
          N2_Res2,
          N3_Res2,
          N4_Res2,
          Occ_Res2,
          Resident_3,
          Type_Res3,
          Title_Res3,
          N1_Res3,
          N2_Res3,
          N3_Res3,
          N4_Res4,
          Occ_Res3,
          Serial_Num,
          Date_Enter,
          Notes,
        },
        geometry: {
          type: "Point",
          coordinates: [
            X,
            Y
          ]
        },
      };
      try {
        newArray.push(newEntry);
      } catch (err) {
        console.log(err);
      }
    })
    try {
      const file = fs.writeFile('florence1561v3.json', JSON.stringify(newArray, null, 2));
      await file;
    } catch (err) { console.log(err) }
  } catch (err) {
    console.error(err);
  }
}

readJson();

