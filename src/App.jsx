import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import "./index.css";
import { data } from "./Components/data";

import DeviceFailure from "./Components/DeviceFailure";

function App() {
  const [deviceSelected, setDeviceSelected] = useState("");
  const [brandSelected, setBrandSelected] = useState("");
  const [modelSelected, setModelSelected] = useState("");
  const [failureName, setFailureName] = useState([]);

  const [open, setOpen] = useState(false);

  const handleChangeDevice = (e) => {
    let device = e.target.value.toUpperCase();
    setDeviceSelected(device);
    setBrandSelected("");
    setModelSelected("");
  };
  const resetForm = () => {
    setDeviceSelected("");
    setBrandSelected("");
    setModelSelected("");
    setFailureName([]);
  };
  const handleChangeBrand = (e) => {
    let brand = e.target.value;
    setBrandSelected(brand);
    setModelSelected("");
  };

  const handleChangeModel = (e) => {
    let model = e.target.value;
    setModelSelected(model);
    setFailureName([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const devices = Object.keys(data.devices);

  const brandsCellPhones = data.devices.celular.marcas;
  const brandsTablets = data.devices.tablet.marcas;
  const brandsNotebooks = data.devices.notebook.marcas;
  const brandsPC = data.devices.pc.marcas;

  const modelsCellPhonesSamsung = data.devices.celular.modelos.samsung;
  const modelsCellPhonesIphone = data.devices.celular.modelos.iphone;
  const modelsCellPhonesMotorola = data.devices.celular.modelos.motorola;
  const modelsCellPhonesLg = data.devices.celular.modelos.lg;
  const modelsCellPhonesHuawei = data.devices.celular.modelos.huawei;
  const modelsCellPhonesAlcatel = data.devices.celular.modelos.alcatel;
  const modelsCellPhonesXiaomi = data.devices.celular.modelos.xiaomi;
  const modelsCellPhonesGenerico = data.devices.celular.modelos.generic;

  const modelsTabletsIpad = data.devices.tablet.modelos.ipad;
  const modelsTabletsSamsung = data.devices.tablet.modelos.samsung;
  const modelsTabletsLenovo = data.devices.tablet.modelos.lenovo;
  const modelsTabletsAcer = data.devices.tablet.modelos.acer;
  const modelsTabletsExo = data.devices.tablet.modelos.exo;
  const modelsTabletsGadnic = data.devices.tablet.modelos.gadnic;
  const modelsTabletsBgh = data.devices.tablet.modelos.bgh;
  const modelsTabletsLg = data.devices.tablet.modelos.lg;
  const modelsTabletsXview = data.devices.tablet.modelos.xview;
  const modelsTabletsAmazon = data.devices.tablet.modelos.amazon;
  const modelsTabletsNoganet = data.devices.tablet.modelos.noganet;
  const modelsTabletsChina = data.devices.tablet.modelos.china;

  const modelsNotebooksDell = data.devices.notebook.modelos.dell;
  const modelsNotebooksAcer = data.devices.notebook.modelos.acer;
  const modelsNotebooksApple = data.devices.notebook.modelos.apple;
  const modelsNotebooksHp = data.devices.notebook.modelos.hp;
  const modelsNotebooksExo = data.devices.notebook.modelos.exo;
  const modelsNotebooksCompaq = data.devices.notebook.modelos.compaq;
  const modelsNotebooksSony = data.devices.notebook.modelos.sony;
  const modelsNotebooksBgh = data.devices.notebook.modelos.bgh;
  const modelsNotebooksBangho = data.devices.notebook.modelos.bangho;
  const modelsNotebooksGenerico = data.devices.notebook.modelos.generic;

  const modelsPcGenerico = data.devices.pc.modelos.generic;

  return (
    <div sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleClickOpen}
      >
        <h2>REPARAR MI EQUIPO</h2>
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Formulario de Reparación</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
              <InputLabel id="demo-simple-select-label">Equipo</InputLabel>
              <Select
                value={deviceSelected}
                label="device"
                onChange={handleChangeDevice}
              >
                {devices.map((item, idx) => (
                  <MenuItem key={idx} value={item.toUpperCase()}>
                    {item.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {deviceSelected === "CELULAR" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                <Select
                  value={brandSelected}
                  label="brand"
                  onChange={handleChangeBrand}
                >
                  {brandsCellPhones.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                  56rty
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "IPHONE" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesIphone.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "SAMSUNG" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesSamsung.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "MOTOROLA" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesMotorola.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "LG" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesLg.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "HUAWEI" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesHuawei.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "ALCATEL" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesAlcatel.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "XIAOMI" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesXiaomi.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "CELULAR" && brandSelected === "GENERICO" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsCellPhonesGenerico.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}

            {deviceSelected === "TABLET" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                <Select
                  value={brandSelected}
                  label="brand"
                  onChange={handleChangeBrand}
                >
                  {brandsTablets.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "IPAD" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsIpad.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "SAMSUNG" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsSamsung.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "LENOVO" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsLenovo.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item.toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "ACER" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsAcer.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item.toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "EXO" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsExo.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item.toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "GADNIC" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsGadnic.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item.toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "BGH" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsBgh.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "LG" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsLg.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "X-VIEW" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsXview.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "AMAZON" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsAmazon.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "NOGANET" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsNoganet.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "TABLET" && brandSelected === "CHINA" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsTabletsChina.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                <Select
                  value={brandSelected}
                  label="brand"
                  onChange={handleChangeBrand}
                >
                  {brandsNotebooks.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "DELL" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksDell.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "ACER" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksAcer.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "APPLE" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksApple.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "HP" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksHp.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "EXO" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksExo.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "COMPAQ" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksCompaq.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "SONY" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksSony.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "BGH" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksBgh.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "BANGHO" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksBangho.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "NOTEBOOK" && brandSelected === "GENERICA" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsNotebooksGenerico.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}

            {deviceSelected === "PC" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                <Select
                  value={brandSelected}
                  label="brand"
                  onChange={handleChangeBrand}
                >
                  {brandsPC.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected === "PC" && brandSelected === "GENERICA" ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  value={modelSelected}
                  label="model"
                  onChange={handleChangeModel}
                >
                  {modelsPcGenerico.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
            {deviceSelected && brandSelected && modelSelected ? (
              <DeviceFailure
                resetForm={resetForm}
                failureName={failureName}
                setFailureName={setFailureName}
                deviceSelected={deviceSelected}
                brandSelected={brandSelected}
                modelSelected={modelSelected}
              />
            ) : null}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
