import React, { useState } from "react";
import { Link } from "react-router-dom";
// import About from "./about";
import CategoryModal from "./categoryModal";

function Categories() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(slugs.nabarvari);
  const [title, setTitle] = useState("");

  const modalHandler = (title: string, value: string) => {
    setOpen(true);
    setText(value);
    setTitle(title);
  };
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">بیماری های مرتبط با رشته اورولوژی</h4>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              {/* <div className=" text-center rounded-lg">
                <img
              src="../assets/images/category/sang.jpg"
              className="img-fluid"
              alt=""
            />
              </div> */}

              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/category/nabarvari.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: 200,
                }}
              ></div>

              <div className="card-body p-0 mt-3">
                <Link to="#" className="title text-dark h5">
                  ناباروری در آقایان
                </Link>
                <p className="text-muted mt-3">
                  شایعترین بیماری قابل درمان عامل ناباروری ...{" "}
                </p>
                <Link
                  to="#"
                  className="link"
                  onClick={() =>
                    modalHandler("ناباروری در آقایان", slugs.nabarvari)
                  }
                >
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/category/tomor.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: 200,
                }}
              ></div>

              <div className="card-body p-0 mt-3">
                <Link to="#" className="title text-dark h5">
                  تومورها و سرطان
                </Link>
                <p className="text-muted mt-3">
                  با پیشرفتهایی که امروزه در درمان سرطان رخ داده ...{" "}
                </p>
                <Link
                  to="#"
                  className="link"
                  onClick={() => modalHandler("تومورها و سرطان", slugs.tomor)}
                >
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/category/sang.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: 200,
                }}
              ></div>
              <div className="card-body p-0 mt-3">
                <Link to="#" className="title text-dark h5">
                  سنگ ادراری
                </Link>
                <p className="text-muted mt-3">
                  برای تشکیل سنگ های ادراری عوامل متعددی ...{" "}
                </p>
                <Link
                  to="#"
                  className="link"
                  onClick={() => modalHandler("سنگ ادراری", slugs.sang)}
                >
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/category/prostat.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: 200,
                }}
              ></div>

              <div className="card-body p-0 mt-3">
                <Link to="#" className="title text-dark h5">
                  پروستات
                </Link>
                <p className="text-muted mt-3">
                  بعد از 40 سالگی به دلایل مختلفی در مردان شاهد ...{" "}
                </p>
                <Link
                  to="#"
                  className="link"
                  onClick={() => modalHandler("پروستات", slugs.prostat)}
                >
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/category/moshkelat.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: 200,
                }}
              ></div>
              <div className="card-body p-0 mt-3">
                <Link to="#" className="title text-dark h5">
                  مشکلات ادراری
                </Link>
                <p className="text-muted mt-3">
                  اختلالات ادراری میتواند شامل تکرر ‌ادرار ...{" "}
                </p>
                <Link
                  to="#"
                  className="link"
                  onClick={() => modalHandler("مشکلات ادراری", slugs.moshkelat)}
                >
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div
                className="col-lg-3 col-md-3 col-6"
                style={{
                  backgroundImage:
                    "url(" + "../assets/images/category/ofoonat.jpg" + ")",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: 200,
                }}
              ></div>
              <div className="card-body p-0 mt-3">
                <Link to="#" className="title text-dark h5">
                  عفونت های ادراری
                </Link>
                <p className="text-muted mt-3">
                  عفونت‌های ادراری (UTI) از شایع‌ترین عفونت‌ها ...{" "}
                </p>
                <Link
                  to="#"
                  className="link"
                  onClick={() =>
                    modalHandler("عفونت های ادراری", slugs.ofoonat)
                  }
                >
                  پیدا کنید <i className="ri-arrow-left-line align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoryModal
        open={open}
        type={text}
        title={title}
        handleClose={() => setOpen(false)}
      />
    </section>
  );
}

export default Categories;

const slugs = {
  nabarvari:
    "شایعترین بیماری قابل درمان عامل ناباروری در آقایان، واریکوسل است. این بیماری عبارت است از واریس عروق بیضه، مانند افرادی که دچار واریس عروق پا می شوند و خون به خوبی در عروق پا حرکت نمی کند. در بیضه‌ها نیز ممکن است این اتفاق پیش آید. ماندن طولانی مدت خون در بیضه ها باعث می شود درجه حرارت بالا رود و اختلالات هورمونی به همراه داشته باشد. این عوارض باعث می شود اسپرم سازی به درستی صورت نگیرد؛ و اختلال در اسپرم سازی، فرد را مستعد ناباروری می‌نماید. اگر واریکوسل یا واریس بیضه به موقع تشخیص داده شود و اقدامات درمانی مناسب صورت گیرد، از آسیب به بیضه جلوگیری می‌شود.",
  tomor:
    "با پیشرفتهایی که امروزه در درمان سرطان رخ داده نیاز رشته ارولوژی به گروهی که به طور ویژه در این زیر شاخه فعالیت کنند، وجود دارد. درمان سرطان های ادراری صرف عمل جراحی عضو درگیر نیست. وظیفه ارولوژیست بررسی هر بیمار سرطانی به صورت اختصاصی است. در این بررسی ارولوژیست بایستی تعیین کند که درمان اصلی بیمار کدام است؟ (مثل جراحی، رادیوتراپی، شیمی درمانی، هورمون درمانی). آیا قبل از شروع درمان اصلی احتیاج به درمان پیش نیاز دارد؟ (مثل شیمی درمانی، رادیوتراپی یا هورمون درمانی). آیا پس از درمان اصلی احتیاج به درمان تکمیلی دارد؟ (مثل شیمی درمانی، هورمون درمانی یا رادیوتراپی). پیگیری درمان در چه فواصلی انجام می شود و در هر فاصله چه بررسی هایی لزوم دارد. در ضمن ارولوژیست بایستی توانایی کنترل بیماری در صورت عود و شکست درمان داشته باشد.",
  sang: "برای تشکیل سنگ های ادراری عوامل متعددی دست به دست هم داده و آن را می سازند. از جمله این عوامل می توان به عوامل خطر اپیدمیولوژیک (سن، جنس، نژاد و سابقه خانوادگی)، عوامل خطر مربوط به رژیم غذایی (میزان مصرف مایعات، پروتئین، کلسیم و نمک) و عوامل خطر ادراری (تغییر غلظت کریستال های ادراری) اشاره کرد.سنگ های ادراری می توانند بدون علامت باشند به طوری که معمولا تا سنگ انسدادی ایجاد نکنند، علامتی ندارند. در صورت انسداد، سنگ یک درد شدید در پهلو و پشت ایجاد می کند که برای بیمار غیر قابل تحمل می باشد.معمولا از سونوگرافی و عکس ساده ی شکم (KUB) استفاده می شود که اگر این ٢ روش کمک کننده نباشد از اوروگرافی وریدی (IVP) یا سی تی اسکن (CT SCAN) استفاده می شود.",
  prostat:
    "بعد از 40 سالگی به دلایل مختلفی در مردان شاهد بزرگ شدن پروستات هستیم که می تواند بر مسیر ادرار و همچنین باروری مردان موثر باشد.علائم ادراری بزرگ شدن پروستات شامل تند تند ادرار کردن یا تکرر ادرار ، شروع ادرار کردن با ناراحتی ، کاهش فشار ادرار ، عدم توانایی در ادرار ، عدم کنترل ادرار و  شب بیدار شدن برای ادرار می باشد.درمان بزرگی پروستات شامل دارو و در مواردی جراحی به صورت باز یا لیزری می باشد.",
  moshkelat:
    "اختلالات ادراری میتواند شامل تکرر ‌ادرار، شب‌ ادراری، عفونت‌های ادراری، بی‌اختیاری‌های ادرار، انسداد مجرای ادرار، آسیب به ناحیه تناسلی که برای تمام افراد اعم از مرد و زن و در هر سنی ممکن است اتفاق بیفتد. این اختلالات در اغلب موارد نشانه‌های شبیه به‌هم دارند. به عنوان مثال رنگ وبوی ادرار می‌تواند نشانه برخی بیماری‌ها باشد.",
  ofoonat:
    "عفونت‌های ادراری (UTI) از شایع‌ترین عفونت‌ها در انسان است که می‌تواند در هر قسمت از سیستم ادراری شما مانند: کلیه‌ها، لوله‌های حالب‌ها[۱] (لوله‌هایی که کلیه‌ها را به مثانه متصل می‌کنند)، مثانه و مجاری ادرار به وجود بیاید. اغلب عفونت‌های ادراری ناشی از باکتری‌ها هستند اما برخی دیگر نیز از قارچ‌ها و ویروس‌ها نشات می‌گیرند. ابتلا به عفونت‌های ادراری می‌تواند باعث سوزش ادرار شود و هنگام دفع ادرار احساس درد ناخوشایندی را برای شخص ایجاد کند. این عفونت‌ها بیش‌تر، دستگاه ادراری تحتانی مانند مثانه و مجاری ادرار را درگیر می‌کنند. ",
};
