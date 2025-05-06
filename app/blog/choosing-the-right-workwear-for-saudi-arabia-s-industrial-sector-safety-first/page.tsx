'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-1 space-x-reverse text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-600">الرئيسية</Link>
              </li>
              <li className="px-2">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">المدونة</Link>
              </li>
              <li className="px-2">/</li>
              <li className="font-medium text-gray-900 dark:text-white">اختيار الزي المناسب للقطاع الصناعي بالسعودية: السلامة أولاً</li>
            </ol>
          </nav>

          {/* Blog header */}
          <header className="mb-8">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
              اختيار الزي المناسب للقطاع الصناعي بالسعودية: السلامة أولاً
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/images/author/default-author.jpg"
                  alt="صورة الكاتب"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div className="mr-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">فريق يونيفورم</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">21 يناير 2024</p>
                </div>
              </div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">أزياء الخدمات المساندة</span>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8 overflow-hidden rounded-xl">
            <Image
              src="/images/industrial/Safety_workwear_PPE_apparel.jpeg"
              alt="صورة ملابس العمل في القطاع الصناعي بالسعودية"
              className="h-auto w-full object-cover"
              width={900}
              height={500}
            />
          </div>

          {/* Blog content */}
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p>
              يواجه القطاع الصناعي في المملكة العربية السعودية تحديات فريدة عندما يتعلق الأمر بملابس العمل، بداية من درجات الحرارة المرتفعة وحتى متطلبات السلامة الصارمة في مختلف الصناعات. لذلك، يعد اختيار الزي المناسب قراراً استراتيجياً يؤثر مباشرة على إنتاجية العاملين وسلامتهم.
            </p>

            <h2>أهمية ملابس العمل المناسبة في القطاع الصناعي</h2>
            <p>
              تتجاوز أهمية ملابس العمل المناسبة مجرد المظهر الاحترافي، فهي خط الدفاع الأول ضد المخاطر المهنية. في المملكة، تشدد الهيئة السعودية للمواصفات والمقاييس والجودة على ضرورة الالتزام بمعايير محددة لملابس العمل الصناعية، خاصة في قطاعات مثل النفط والغاز، البتروكيماويات، والإنشاءات.
            </p>

            <h2>معايير اختيار الزي الصناعي المناسب</h2>
            <ol>
              <li>
                <strong>مقاومة الحرارة:</strong> نظراً للمناخ الحار في المملكة، يجب أن تكون الأقمشة قابلة للتنفس وتساعد على تبديد الحرارة، مع الحفاظ على معايير السلامة.
              </li>
              <li>
                <strong>مقاومة اللهب:</strong> خاصية ضرورية للعاملين في قطاعات النفط والغاز، حيث يجب أن تطابق الملابس معايير NFPA 2112 أو ما يعادلها.
              </li>
              <li>
                <strong>المتانة:</strong> قدرة الملابس على تحمل الاستخدام المتكرر والغسيل المنتظم دون فقدان خصائصها الوقائية.
              </li>
              <li>
                <strong>الراحة:</strong> تصميم يسمح بحرية الحركة دون المساومة على عوامل الحماية.
              </li>
              <li>
                <strong>الوضوح:</strong> استخدام الألوان عالية الوضوح والعاكسات للعاملين في مواقع البناء أو المناطق المعرضة لحركة المركبات.
              </li>
            </ol>

            <h2>أنواع الأقمشة الموصى بها للقطاع الصناعي السعودي</h2>
            <ul>
              <li>
                <strong>القطن المعالج:</strong> يوفر راحة في الطقس الحار مع إمكانية معالجته لمقاومة اللهب.
              </li>
              <li>
                <strong>مزيج القطن والبوليستر:</strong> يوازن بين المتانة والراحة، مناسب للاستخدام اليومي.
              </li>
              <li>
                <strong>أقمشة التيترون:</strong> خفيفة وتجف بسرعة، مثالية للبيئات الرطبة.
              </li>
              <li>
                <strong>الأقمشة الاصطناعية المتخصصة:</strong> مثل Nomex و Kevlar، توفر حماية استثنائية ضد المخاطر المحددة.
              </li>
            </ul>

            <h2>ملابس العمل حسب القطاع الصناعي</h2>
            <h3>قطاع النفط والغاز</h3>
            <p>
              يتطلب هذا القطاع ملابس مقاومة للهب بشكل أساسي، إضافة إلى القدرة على تحمل الظروف القاسية. يُنصح باختيار ملابس تحمل شهادات دولية معترف بها مثل NFPA و ISO 11612.
            </p>
            
            <h3>قطاع البناء والإنشاءات</h3>
            <p>
              الخوذ الصلبة، السترات عالية الوضوح، والأحذية المقاومة للانزلاق والثقب هي عناصر أساسية. يجب أن تكون الملابس متينة ومريحة في آن واحد.
            </p>

            <h3>قطاع الصناعات التحويلية</h3>
            <p>
              تختلف المتطلبات حسب طبيعة المصنع، لكن بشكل عام، يُفضل ملابس تغطي الجسم بالكامل مع توفير حماية ضد المخاطر المحددة مثل الرذاذ الكيميائي أو الحرارة.
            </p>

            <h2>الامتثال للمعايير السعودية والدولية</h2>
            <p>
              يجب أن تمتثل ملابس العمل الصناعية في المملكة لمعايير الهيئة السعودية للمواصفات والمقاييس والجودة، بالإضافة إلى المعايير الدولية المقبولة مثل:
            </p>
            <ul>
              <li>ANSI/ISEA 107 للملابس عالية الوضوح</li>
              <li>EN ISO 11612 للملابس المقاومة للحرارة واللهب</li>
              <li>ASTM F1506 للحماية من الأقواس الكهربائية</li>
            </ul>

            <h2>الخلاصة</h2>
            <p>
              اختيار ملابس العمل المناسبة للقطاع الصناعي في المملكة ليس مجرد مسألة امتثال للوائح، بل هو استثمار في سلامة وإنتاجية القوى العاملة. مع مراعاة الظروف المناخية الخاصة بالمملكة والمتطلبات الفريدة لكل قطاع، يمكن للشركات توفير بيئة عمل أكثر أماناً وراحة لموظفيها.
            </p>
            
            <p>
              تذكر دائماً: الحماية والسلامة لا تقبل المساومة، وملابس العمل الجيدة هي خط الدفاع الأول ضد مخاطر بيئة العمل.
            </p>
          </div>

          {/* CTA section */}
          <div className="mt-12 rounded-xl bg-blue-50 p-6 dark:bg-blue-900">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">هل تبحث عن حلول مخصصة لملابس العمل الصناعية؟</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">نحن في يونيفورم نقدم حلولاً متكاملة تراعي متطلبات السلامة والراحة في القطاع الصناعي السعودي. تواصل معنا اليوم للحصول على استشارة مجانية.</p>
            <Link href="/contact" className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700">
              تواصل معنا
            </Link>
          </div>

          {/* Related posts */}
          <div className="mt-12">
            <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">مقالات ذات صلة</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Link href="/blog/workwear/utility-services-uniform-standards" className="group block overflow-hidden rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="p-4">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">معايير الزي الموحد لشركات الخدمات والمرافق</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">دليل شامل للمعايير والمواصفات العالمية للزي الموحد في شركات الخدمات...</p>
                </div>
              </Link>
              <Link href="/blog/workwear/workwear-maintenance-guide" className="group block overflow-hidden rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="p-4">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">أساسيات العناية بملابس العمل: دليل شامل للحفاظ على جودتها</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">نصائح عملية للعناية بملابس العمل وإطالة عمرها الافتراضي...</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 