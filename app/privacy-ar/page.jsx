import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'سياسة الخصوصية | UniformSA',
  description: 'سياسة الخصوصية الخاصة بشركة UniformSA، والتي توضح كيفية جمع واستخدام وحماية معلوماتك الشخصية.',
}

export default function PrivacyPolicyArabic() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">سياسة الخصوصية</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تقدم هذه السياسة نظرة عامة على ممارسات الخصوصية لدينا وكيفية جمع واستخدام وحماية معلوماتك الشخصية.
            </p>
          </div>

          <div className="space-y-8">
            {/* Personal Information Control */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">التحكم في معلوماتك الشخصية</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                يمكنك تقييد جمع أو استخدام معلوماتك الشخصية بالطرق التالية:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">إعدادات النماذج</h3>
                      <p className="text-gray-600">عند ملء النماذج على الموقع، ابحث عن خيارات الاشتراك لتعيين تفضيلات التسويق الخاصة بك</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">إلغاء الاشتراك</h3>
                      <p className="text-gray-600">يمكنك إلغاء الاشتراك من رسائلنا في أي وقت عبر رابط إلغاء الاشتراك في الرسائل</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">صفحة الحساب</h3>
                      <p className="text-gray-600">تحديث تفضيلاتك في صفحة حسابك (للمستخدمين المسجلين)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">اتصل بنا</h3>
                      <p className="text-gray-600">يمكنك الاتصال بنا مباشرة بشأن معلوماتك أو طلب حذفها</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                لن نبيع أو نوزع أو نؤجر معلوماتك الشخصية لأطراف ثالثة ما لم يكن لدينا إذن منك أو يكون ذلك مطلوبًا بموجب القانون. قد نستخدم معلوماتك الشخصية لإرسال معلومات ترويجية إليك حول المنتجات أو الخدمات التي نعتقد أنك قد تجدها مثيرة للاهتمام إذا كنت قد أشرت إلى رغبتك في تلقي هذه المعلومات.
              </p>
            </div>

            {/* Policy Changes */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">التغييرات على سياسة الخصوصية</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                نراجع سياسة الخصوصية الخاصة بنا بانتظام وننشر أي تحديثات على هذه الصفحة. تم تحديث سياسة الخصوصية هذه آخر مرة في <span className="font-semibold">15 يونيو 2023</span>.
              </p>
              <div className="p-5 bg-blue-50 border-r-4 border-blue-400 rounded-lg mt-4">
                <div className="flex gap-3">
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    سنخطرك بأي تغييرات مهمة في سياسة الخصوصية الخاصة بنا من خلال نشر إشعار بارز على موقعنا الإلكتروني و/أو إرسال إشعار إلى عنوان بريدك الإلكتروني المسجل.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">كيفية الاتصال بنا</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا أو المعلومات التي نحتفظ بها عنك، فلا تتردد في الاتصال بنا:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-5 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">البريد الإلكتروني</h3>
                  <p className="text-primary">privacy@uniformsa.com</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">الهاتف</h3>
                  <p className="text-primary">+966 12 345 6789</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">نموذج الاتصال</h3>
                  <Link href="/contact-ar" className="text-primary hover:underline">
                    زيارة صفحة الاتصال
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary/90 to-primary/60 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">هل لديك المزيد من الأسئلة؟</h2>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                فريق خدمة العملاء لدينا جاهز للإجابة على أي استفسارات قد تكون لديك حول خصوصية بياناتك وكيفية استخدامنا لمعلوماتك
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact-ar" 
                  className="rounded-md bg-white px-5 py-2.5 text-primary font-medium hover:bg-gray-100 transition duration-300"
                >
                  اتصل بنا اليوم
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
