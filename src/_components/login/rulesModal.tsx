import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

interface IProps {
  open: boolean;
  handleClose: any;
}
export default function RulesModal(props: IProps) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-description" sx={style}>
          <Typography
            id="modal-modal-title"
            style={{ font: "inherit" }}
            variant="h6"
            component="h2"
          >
            قوانین و مقررات
          </Typography>

          <Typography
            id="modal-modal-description"
            style={{ font: "inherit", lineHeight: 2 }}
            sx={{ mt: 2 }}
          >
            <ul>
              <li>
                شرایط پوشش در هنگام ویزیت آنلاین مشابه ویزیت حضوری با رعایت کامل
                اصول اخلاق پزشکی می باشد
              </li>
              <li>
                وقت رزرو شده در محدوده اعلام شده است لذا ساعاتی قبل از تماس
                آنلاین ، حدود زمانی به شما از طریق پیامک همراه با لینک تماس
                اطلاع داده خواهد شد لذا نیازی به اقدامی پس از رزرو از طرف شما
                نمی باشد.
              </li>
              <li>
                نسخه نوشته شده با مهر پزشک برای شما ارسال می شود که می توانید با
                ارائه آن به داروخانه ها دارو را دریافت نمایید. گواهی مبلغ ویزیت
                دریافت شده نیز از همین طریق قابل ارسال است.
              </li>
              <li>
                همچنین امکان ثبت نسخه الکترونیک نیز وجود دارد و بیماران تحت پوشش
                بیمه تامین اجتماعی یا بیمه سلامت می توانند با درخواست از پزشک
                حین ویزیت ، داروهای خود را به صورت بیمه ای مستقیما از داروخانه
                دریافت کنند.
              </li>
              <li>
                چنانچه اینترنت مطلوبی در دسترس شما نبود به ایمیل وبسایت
                (dr.alitabibi.ir@gmail.com) اطلاع دهید تا هماهنگی لازم با شما
                انجام شود.
              </li>
              <li>
                در صورتی که نوبت ها تکمیل باشند ، با توجه به احتمال کنسل شدن
                برخی نوبت ها ، می توانید 48 ساعت قبل از آن ساعت مورد نظر، مجددا
                سایت را بررسی نمایید.
              </li>
              <li>
                در صورتی که در زمان ویزیت آنلاین ، حضور نداشته باشید نوبت و
                هزینه آن قابل عودت و یا انتقال به زمان دیگر نمی باشد.
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
