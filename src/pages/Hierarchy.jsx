import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useState } from "react";
import HieGene from "../components/HieGene";

const Hierarchy = () => {
  const [openMath, setOpenMath] = useState(false);
  const [openPhysics, setOpenPhysics] = useState(false);
  const [openBiology, setOpenBiology] = useState(false);
  const BenHalWA = "+62818588589";

  const handleClickMath = () => {
    if ((!openMath && openPhysics) || (!openMath && openBiology)) {
      setOpenPhysics(false);
      setOpenMath(!openMath);
      setOpenBiology(false);
    } else {
      setOpenPhysics(false);
      setOpenMath(!openMath);
      setOpenBiology(false);
    }
  };

  const handleClickPhysics = () => {
    if ((!openPhysics && openMath) || (!openPhysics && openBiology)) {
      setOpenMath(false);
      setOpenPhysics(!openPhysics);
      setOpenBiology(false);
    } else {
      setOpenMath(false);
      setOpenPhysics(!openPhysics);
      setOpenBiology(false);
    }
  };
  const handleClickBiology = () => {
    if ((!openBiology && openMath) || (!openBiology && openPhysics)) {
      setOpenMath(false);
      setOpenBiology(!openBiology);
      setOpenPhysics(false);
    } else {
      setOpenMath(false);
      setOpenBiology(!openBiology);
      setOpenPhysics(false);
    }
  };

  return (
    <>
      <Stack className="torso">
        <Stack sx={{ width: "90vw", height: "60vh" }} gap={2}>
          <Stack>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Hierarchy
            </Typography>
          </Stack>
          <Stack>
            <List
              sx={{
                color: "var(--dark-color)",
                fontSize: "21px",
                padding: "0",
                width: "100%",
                border: "2px solid #cecece",
              }}
            >
              {/* Math */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                }}
                onClick={handleClickMath}
              >
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontWeight: "800" }}
                  primary="Mathemathics"
                />
              </ListItemButton>
              <Collapse in={openMath} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <HieGene
                    link="https://drive.google.com/file/d/1b_61jcUHMAwQQqkZRIHoLyIO07PeDHPT/view?usp=sharing"
                    chip="Syllabus"
                    title="Learning Program Matematika"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1lQUQWQs52Mx8b686OWqs1YmEZg1VCEdY/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="Modul Matematika Peminatan Kelas X  (T.A. 2021-2022) (1) (1) (3) (1)"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1o47EA13IxT-I4h47qbU8B4dNm1UaB5gp/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="Modul Matematika WAJIB Kelas X IPA dan IPS (2021-2022) (1) (1)"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1GnZGpWiz8JwS9Mh_DFUmEqt95Q9o3di6/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="[Trigonometry] Modul Trigonometry CC (src: Kakel)"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1gTE1jGRdi5wj7cFzngB4qqMDD-yf2Ipk/view?usp=sharing"
                    chip="BenHal"
                    title="[Trigonometry] #1 Introduction"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1j4tcYnXXI2OeuqyG7gMUvRS7tE45Jzo7/view?usp=sharing"
                    chip="BenHal"
                    title="[Trigonometry] #2 Sudut Berelasi & Asal usul radian"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1kL5YXxboEoQFtqcDgOPexaZD5BGffmMA/view?usp=sharing"
                    color="info"
                    chip="Latihan Soal"
                    title="[Trigonometry] Latihan Soal Perbandingan & Fungsi Trigonometri"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1ng76-zmVoIBI6uxG0beKLSc-8RYuD9sD/view?usp=sharing"
                    color="info"
                    chip="Latihan Soal"
                    title="[Trigonometry] Latihan Soal Aturan Sinus, Cosinus, Luas Segitiga"
                  />

                  {/* Go continue trigono this is a little divider for matrix(kls 11) */}
                  <HieGene
                    link="https://docs.google.com/document/d/1J7SXECsV4tbBkGXYjuUDXf5yaLIeWp4n3A34srADdZk/edit?usp=sharing"
                    chip="Notebank"
                    title="[Matrix] #1 Introduction & Operations"
                  />
                </List>
              </Collapse>

              {/* Physics */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickPhysics}
              >
                <ListItemIcon>
                  <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary="Physics" />
                {/* TODO: go do some icon alchemy shit check https://mui.com/material-ui/react-list/ at the nested list part */}
              </ListItemButton>
              <Collapse in={openPhysics} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the notebook background */}
                <List disablePadding>
                  <HieGene
                    link="https://drive.google.com/file/d/1a3hnt0Sdho0o9CLmpRzn1zJeZwoyZn3v/view?usp=sharing"
                    chip="Pending"
                    title="Learning program Fisika"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1a3hnt0Sdho0o9CLmpRzn1zJeZwoyZn3v/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="MODUL PEMBELAJARAN FISIKA KELAS X SMA KANISIUS"
                  />
                </List>
              </Collapse>

              {/* Biology */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickBiology}
              >
                <ListItemIcon>
                  <CoronavirusIcon />
                </ListItemIcon>
                <ListItemText primary="Biology" />
              </ListItemButton>
              <Collapse in={openBiology} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program biologi"
                  link="/"
                  chip="pending"
                />
              </Collapse>
            </List>
          </Stack>
          <Stack>
            <Typography sx={{ color: "crimson", fontWeight: "800" }}>
              INGATLAH NAK! Klo ada kesalahan, contact yg buat catatan itu
              sehingga bisa di revisi.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Hierarchy;
