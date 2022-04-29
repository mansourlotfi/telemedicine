import { Button, Grid } from "@mui/material";

function Partners() {
  return (
    <section className="bg-light">
      <div className="container">
        <Grid container sx={{ p: 2 }}>
          <Grid item container justifyContent="space-around">
            <a href="http://gandihospital.ir" target="_blank">
              <Button sx={{ font: "inherit", mt: 2 }} variant="outlined">
                بیمارستان گاندی
              </Button>
            </a>
            <a href="https://lamc.sbmu.ac.ir" target="_blank">
              <Button sx={{ font: "inherit", mt: 2 }} variant="outlined">
                بیمارستان لبافی نژاد (قطب ارولوژی ایران)
              </Button>
            </a>
            <a href="https://erfanhospital.ir" target="_blank">
              <Button sx={{ font: "inherit", mt: 2 }} variant="outlined">
                بیمارستان عرفان سعادت آباد
              </Button>
            </a>
            <a href="https://msp.sbmu.ac.ir" target="_blank">
              <Button sx={{ font: "inherit", mt: 2 }} variant="outlined">
                دانشگاه علوم پزشکی شهید بهشتی
              </Button>
            </a>
          </Grid>
          <Grid item container justifyContent="space-around" sx={{ p: 2 }}>
            <a href="https://isid.research.ac.ir/Ali_Tabibi" target="_blank">
              <div
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/partners/elmsanji.png" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  minHeight: 100,
                  minWidth: 200,
                }}
              ></div>
            </a>

            <a
              href="https://scholar.google.com/citations?user=etTc0AQAAAAJ&hl=en&oi=ao"
              target="_blank"
            >
              <div
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/partners/gs.png" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  minHeight: 100,
                  minWidth: 200,
                }}
              ></div>
            </a>

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=16679922100"
              target="_blank"
            >
              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/partners/sc.png" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  minHeight: 100,
                  minWidth: 200,
                }}
              ></div>
            </a>

            <a href="https://orcid.org/0000-0003-2829-6061" target="_blank">
              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/partners/orcid.png" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  minHeight: 100,
                  minWidth: 200,
                }}
              ></div>
            </a>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Partners;
