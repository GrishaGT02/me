import React, { useState, useEffect, useCallback } from 'react';
import './Kvis.css';

const Kvis = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [dentalSituation, setDentalSituation] = useState('');
  const [painArea, setPainArea] = useState('');
  const [painFeeling, setPainFeeling] = useState('');
  const [visualChanges, setVisualChanges] = useState('');
  const [toothToRemove, setToothToRemove] = useState('');
  const [toothCondition, setToothCondition] = useState('');
  const [removalVisualChanges, setRemovalVisualChanges] = useState('');
  const [crownSituation, setCrownSituation] = useState('');
  const [crownGoal, setCrownGoal] = useState('');
  const [crownTeeth, setCrownTeeth] = useState('');
  const [implantSituation, setImplantSituation] = useState('');
  const [implantTeethCount, setImplantTeethCount] = useState('');
  const [implantPriority, setImplantPriority] = useState('');
  const [implantDiagnostics, setImplantDiagnostics] = useState('');
  const [whiteningFillings, setWhiteningFillings] = useState('');
  const [whiteningMethod, setWhiteningMethod] = useState('');
  const [hygieneReason, setHygieneReason] = useState('');
  const [hygieneLastVisit, setHygieneLastVisit] = useState('');
  const [veneersSituation, setVeneersSituation] = useState('');
  const [veneersTeethCount, setVeneersTeethCount] = useState('');
  const [consultationFor, setConsultationFor] = useState('');
  const [lastDentistVisit, setLastDentistVisit] = useState('');
  const [messengerType, setMessengerType] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const services = [
    'Лечение зубов',
    'Удаление зуба',
    'Коронки/протезирование',
    'Имплантация',
    'Отбеливание зубов',
    'Проф.гигиена',
    'Виниры и реставрация',
    'Консультация/плановый осмотр'
  ];

  const dentalSituationOptions = [
    'Зуб реагирует на сладкое',
    'Острая, резкая, стреляющая боль (особенно при накусывании)',
    'Боль ноющая, постоянная',
    'Зуб реагирует на температурные раздражители',
    'Нужна консультация'
  ];

  const painAreaOptions = [
    'Верхняя челюсть жевательный зуб',
    'Нижняя челюсть жевательный зуб',
    'Фронтальный зуб (передний зуб)'
    
  ];

  const painFeelingOptions = [
    'в одном конкретном зубе',
    'боль отдает в другие зубы',
    'боль отдает в ухо/горло/голову',
    'другое'
  ];

  const visualChangesOptions = [
    'глубокая дырка/скол/трещина/старая пломба',
    'отек щеки/лица',
    'припухлость десны',
    'нет',
    'другое'
  ];

  const toothToRemoveOptions = [
    'зуб мудрости (прорезанный)',
    'зуб мудрости (непрорезанный)',
    'жевательный зуб',
    'фронтальный зуб (передний зуб)',
    'нужна консультация'
  ];

  const toothConditionOptions = [
    'подвижный',
    'разрушенный',
    'целый',
    'нужна консультация'
  ];

  const removalVisualChangesOptions = [
    'нет',
    'отек щеки/лица',
    'другое'
  ];

  const crownSituationOptions = [
    'Есть имплант, нужна коронка',
    'Есть отсутствующие зубы',
    'Старые разрушенные коронки/мосты',
    'Неэстетичный вид зубов',
    'Требуется установить коронку на зуб',
    'Нужна консультация'
  ];

  const crownGoalOptions = [
    'Восстановить функцию жевания (чтобы есть любую пищу без ограничений)',
    'Максимальная естественность и красота ("голливудская" улыбка)',
    'Бюджетное решение (оптимальное соотношение цены и качества)',
    'Минимальное вмешательство (сохранение соседних зубов)',
    'Нужна консультация'
  ];

  const crownTeethOptions = [
    'Жевательный зуб',
    'Фронтальный зуб (передний)'
  ];

  const implantSituationOptions = [
    'Есть отсутствующие зубы',
    'Есть зубы, которые необходимо удалить и установить имплант',
    'Нужна консультация'
  ];

  const implantTeethCountOptions = [
    '1',
    '2 и более',
    'нужна консультация'
  ];

  const implantPriorityOptions = [
    'Сокращение сроков лечения (возможность немедленной нагрузки)',
    'Минимизация хирургических этапов (одномоментная имплантация, костная пластика одновременно)',
    'Согласен на длительный процесс лечения',
    'Стоимость лечения',
    'Другое'
  ];

  const implantDiagnosticsOptions = [
    'Да, есть компьютерная томография (КТ) челюстей',
    'Нет, но готов(а) сделать'
  ];

  const whiteningFillingsOptions = [
    'Да',
    'Нет'
  ];

  const whiteningMethodOptions = [
    'Клиническое отбеливание',
    'Домашнее отбеливание',
    'Комбинированное отбеливание (клиническое+домашнее)',
    'Нужна консультация врача'
  ];

  const hygieneReasonOptions = [
    'Плановая профилактическая чистка',
    'Образование заметного зубного камня или налета',
    'Подготовка к лечению, отбеливанию, протезированию или имплантации',
    'Другое'
  ];

  const hygieneLastVisitOptions = [
    'Никогда не проходил(а)',
    'Более 1-2 лет назад',
    'Регулярно, раз в полгода/год'
  ];

  const veneersSituationOptions = [
    'Не устраивает цвет/форма зубов/размер/положение',
    'Незначительные дефекты (сколы, большие старые пломбы)',
    'Стираемость зубов',
    'Желание получить «голливудский» стандарт',
    'Нужна консультация врача'
  ];

  const veneersTeethCountOptions = [
    'верхняя челюсть (зона улыбки)',
    'нижняя челюсть (зона улыбки)',
    'Обе челюсти',
    'Нужна консультация врача'
  ];

  const consultationForOptions = [
    'себя',
    'ребенка',
    'другое'
  ];

  const lastDentistVisitOptions = [
    'Меньше месяца назад',
    'Около 6 месяцев',
    'Около года',
    'Не помню'
  ];

  // Функция для выбора услуги с авто-переходом
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    if (service === 'Лечение зубов') {
      setStep(2);
    } else if (service === 'Удаление зуба') {
      setStep(7);
    } else if (service === 'Коронки/протезирование') {
      setStep(10);
    } else if (service === 'Имплантация') {
      setStep(13);
    } else if (service === 'Отбеливание зубов') {
      setStep(17);
    } else if (service === 'Проф.гигиена') {
      setStep(19);
    } else if (service === 'Виниры и реставрация') {
      setStep(21);
    } else if (service === 'Консультация/плановый осмотр') {
      setStep(23);
    }
  };

  // Универсальная функция для выбора опции с авто-переходом
  const handleOptionSelect = (setter, value, nextStep) => {
    setter(value);
    setStep(nextStep);
  };

  const handleNext = useCallback(() => {
    if (step === 1) {
      if (!selectedService) {
        alert('Пожалуйста, выберите услугу');
        return;
      }
      if (selectedService === 'Лечение зубов') {
        setStep(2);
      } else if (selectedService === 'Удаление зуба') {
        setStep(7);
      } else if (selectedService === 'Коронки/протезирование') {
        setStep(10);
      } else if (selectedService === 'Имплантация') {
        setStep(13);
      } else if (selectedService === 'Отбеливание зубов') {
        setStep(17);
      } else if (selectedService === 'Проф.гигиена') {
        setStep(19);
      } else if (selectedService === 'Виниры и реставрация') {
        setStep(21);
      } else if (selectedService === 'Консультация/плановый осмотр') {
        setStep(23);
      } else {
        alert('Для других услуг опрос будет добавлен позже');
      }
    } else if (step === 2) {
      if (!dentalSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!painArea) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!painFeeling) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(5);
    } else if (step === 5) {
      if (!visualChanges) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 6) {
      if (!messengerType) {
        alert('Пожалуйста, выберите способ связи');
        return;
      }
      if (!privacyConsent) {
        alert('Пожалуйста, согласитесь на обработку персональных данных');
        return;
      }
      // Финальный шаг - отправка данных
      console.log('Form submitted:', {
        service: selectedService,
        dentalSituation,
        painArea,
        painFeeling,
        visualChanges,
        toothToRemove,
        toothCondition,
        removalVisualChanges,
        crownSituation,
        crownGoal,
        crownTeeth,
        implantSituation,
        implantTeethCount,
        implantPriority,
        implantDiagnostics,
        whiteningFillings,
        whiteningMethod,
        hygieneReason,
        hygieneLastVisit,
        veneersSituation,
        veneersTeethCount,
        consultationFor,
        lastDentistVisit,
        messengerType,
        privacyConsent
      });
      alert('Спасибо! Ваша заявка отправлена.');
    } else if (step === 7) {
      if (!toothToRemove) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(8);
    } else if (step === 8) {
      if (!toothCondition) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(9);
    } else if (step === 9) {
      if (!removalVisualChanges) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 10) {
      if (!crownSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(11);
    } else if (step === 11) {
      if (!crownGoal) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(12);
    } else if (step === 12) {
      if (!crownTeeth) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 13) {
      if (!implantSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(14);
    } else if (step === 14) {
      if (!implantTeethCount) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(15);
    } else if (step === 15) {
      if (!implantPriority) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(16);
    } else if (step === 16) {
      if (!implantDiagnostics) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 17) {
      if (!whiteningFillings) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(18);
    } else if (step === 18) {
      if (!whiteningMethod) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 19) {
      if (!hygieneReason) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(20);
    } else if (step === 20) {
      if (!hygieneLastVisit) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 21) {
      if (!veneersSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(22);
    } else if (step === 22) {
      if (!veneersTeethCount) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 23) {
      if (!consultationFor) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(24);
    } else if (step === 24) {
      if (!lastDentistVisit) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    }
  }, [step, selectedService, dentalSituation, painArea, painFeeling, visualChanges, toothToRemove, toothCondition, removalVisualChanges, crownSituation, crownGoal, crownTeeth, implantSituation, implantTeethCount, implantPriority, implantDiagnostics, whiteningFillings, whiteningMethod, hygieneReason, hygieneLastVisit, veneersSituation, veneersTeethCount, consultationFor, lastDentistVisit, messengerType, privacyConsent]);

  const handleBack = () => {
    if (step === 7) {
      setStep(1);
    } else if (step === 8) {
      setStep(7);
    } else if (step === 9) {
      setStep(8);
    } else if (step === 10) {
      setStep(1);
    } else if (step === 11) {
      setStep(10);
    } else if (step === 12) {
      setStep(11);
    } else if (step === 13) {
      setStep(1);
    } else if (step === 14) {
      setStep(13);
    } else if (step === 15) {
      setStep(14);
    } else if (step === 16) {
      setStep(15);
    } else if (step === 17) {
      setStep(1);
    } else if (step === 18) {
      setStep(17);
    } else if (step === 19) {
      setStep(1);
    } else if (step === 20) {
      setStep(19);
    } else if (step === 21) {
      setStep(1);
    } else if (step === 22) {
      setStep(21);
    } else if (step === 23) {
      setStep(1);
    } else if (step === 24) {
      setStep(23);
    } else if (step === 6 && selectedService === 'Удаление зуба') {
      setStep(9);
    } else if (step === 6 && selectedService === 'Коронки/протезирование') {
      setStep(12);
    } else if (step === 6 && selectedService === 'Имплантация') {
      setStep(16);
    } else if (step === 6 && selectedService === 'Отбеливание зубов') {
      setStep(18);
    } else if (step === 6 && selectedService === 'Проф.гигиена') {
      setStep(20);
    } else if (step === 6 && selectedService === 'Виниры и реставрация') {
      setStep(22);
    } else if (step === 6 && selectedService === 'Консультация/плановый осмотр') {
      setStep(24);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNext]);

  const renderStep1 = () => (
    <>
      <h2 className="kvis-title">Выберите услугу, которая Вас интересует</h2>
      <div className="kvis-options-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`kvis-option ${selectedService === service ? 'selected' : ''}`}
            onClick={() => handleServiceSelect(service)}
          >
            <div className="kvis-radio-wrapper">
              {selectedService === service ? (
                <div className="kvis-checkbox checked">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{service}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h2 className="kvis-title">Что Вас беспокоит?</h2>
      <div className="kvis-options-grid">
        {dentalSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${dentalSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setDentalSituation, option, 3)}
          >
            <div className="kvis-radio-wrapper">
              {dentalSituation === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h2 className="kvis-title">Опишите область, где болит:</h2>
      <div className="kvis-options-grid">
        {painAreaOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${painArea === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setPainArea, option, 4)}
          >
            <div className="kvis-radio-wrapper">
              {painArea === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <h2 className="kvis-title">Как ощущается боль?</h2>
      <div className="kvis-options-grid">
        {painFeelingOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${painFeeling === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setPainFeeling, option, 5)}
          >
            <div className="kvis-radio-wrapper">
              {painFeeling === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep5 = () => (
    <>
      <h2 className="kvis-title">Есть ли визуальные изменения</h2>
      <div className="kvis-options-grid">
        {visualChangesOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${visualChanges === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setVisualChanges, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {visualChanges === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep7 = () => (
    <>
      <h2 className="kvis-title">Какой зуб планируете удалить?</h2>
      <div className="kvis-options-grid">
        {toothToRemoveOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${toothToRemove === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setToothToRemove, option, 8)}
          >
            <div className="kvis-radio-wrapper">
              {toothToRemove === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep8 = () => (
    <>
      <h2 className="kvis-title">В каком состоянии зуб?</h2>
      <div className="kvis-options-grid">
        {toothConditionOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${toothCondition === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setToothCondition, option, 9)}
          >
            <div className="kvis-radio-wrapper">
              {toothCondition === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep9 = () => (
    <>
      <h2 className="kvis-title">Есть ли визуальные изменения?</h2>
      <div className="kvis-options-grid">
        {removalVisualChangesOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${removalVisualChanges === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setRemovalVisualChanges, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {removalVisualChanges === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep10 = () => (
    <>
      <h2 className="kvis-title">Какая у Вас ситуация?</h2>
      <div className="kvis-options-grid">
        {crownSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${crownSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setCrownSituation, option, 11)}
          >
            <div className="kvis-radio-wrapper">
              {crownSituation === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep11 = () => (
    <>
      <h2 className="kvis-title">Какая Ваша главная цель протезирования?</h2>
      <div className="kvis-options-grid">
        {crownGoalOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${crownGoal === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setCrownGoal, option, 12)}
          >
            <div className="kvis-radio-wrapper">
              {crownGoal === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep12 = () => (
    <>
      <h2 className="kvis-title">Какие зубы необходимо восстановить?</h2>
      <div className="kvis-options-grid">
        {crownTeethOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${crownTeeth === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setCrownTeeth, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {crownTeeth === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep13 = () => (
    <>
      <h2 className="kvis-title">Какая у Вас ситуация?</h2>
      <div className="kvis-options-grid">
        {implantSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantSituation, option, 14)}
          >
            <div className="kvis-radio-wrapper">
              {implantSituation === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep14 = () => (
    <>
      <h2 className="kvis-title">Сколько зубов у Вас отсутствуют?</h2>
      <div className="kvis-options-grid">
        {implantTeethCountOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantTeethCount === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantTeethCount, option, 15)}
          >
            <div className="kvis-radio-wrapper">
              {implantTeethCount === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep15 = () => (
    <>
      <h2 className="kvis-title">Ваши приоритеты в лечении</h2>
      <div className="kvis-options-grid">
        {implantPriorityOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantPriority === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantPriority, option, 16)}
          >
            <div className="kvis-radio-wrapper">
              {implantPriority === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep16 = () => (
    <>
      <h2 className="kvis-title">Была ли проведена предварительная диагностика?</h2>
      <div className="kvis-options-grid">
        {implantDiagnosticsOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantDiagnostics === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantDiagnostics, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {implantDiagnostics === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep17 = () => (
    <>
      <h2 className="kvis-title">Есть ли пломбы на передних зубах?</h2>
      <div className="kvis-options-grid">
        {whiteningFillingsOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${whiteningFillings === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setWhiteningFillings, option, 18)}
          >
            <div className="kvis-radio-wrapper">
              {whiteningFillings === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep18 = () => (
    <>
      <h2 className="kvis-title">Какой метод осветления планируете сделать?</h2>
      <div className="kvis-options-grid">
        {whiteningMethodOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${whiteningMethod === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setWhiteningMethod, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {whiteningMethod === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep19 = () => (
    <>
      <h2 className="kvis-title">Основная причина визита на гигиену?</h2>
      <div className="kvis-options-grid">
        {hygieneReasonOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${hygieneReason === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setHygieneReason, option, 20)}
          >
            <div className="kvis-radio-wrapper">
              {hygieneReason === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep20 = () => (
    <>
      <h2 className="kvis-title">Как давно вы последний раз проходили профессиональную гигиену?</h2>
      <div className="kvis-options-grid">
        {hygieneLastVisitOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${hygieneLastVisit === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setHygieneLastVisit, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {hygieneLastVisit === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep21 = () => (
    <>
      <h2 className="kvis-title">Какая у Вас ситуация?</h2>
      <div className="kvis-options-grid">
        {veneersSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${veneersSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setVeneersSituation, option, 22)}
          >
            <div className="kvis-radio-wrapper">
              {veneersSituation === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep22 = () => (
    <>
      <h2 className="kvis-title">На какое количество зубов хотите установить виниры?</h2>
      <div className="kvis-options-grid">
        {veneersTeethCountOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${veneersTeethCount === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setVeneersTeethCount, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {veneersTeethCount === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep23 = () => (
    <>
      <h2 className="kvis-title">Кого хотите записать на прием?</h2>
      <div className="kvis-options-grid">
        {consultationForOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${consultationFor === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setConsultationFor, option, 24)}
          >
            <div className="kvis-radio-wrapper">
              {consultationFor === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep24 = () => (
    <>
      <h2 className="kvis-title">Когда в последний раз были у стоматолога?</h2>
      <div className="kvis-options-grid">
        {lastDentistVisitOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${lastDentistVisit === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setLastDentistVisit, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {lastDentistVisit === option ? (
                <div className="kvis-radio checked-radio">
                  <div className="kvis-radio-inner"></div>
                </div>
              ) : (
                <div className="kvis-radio"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep6 = () => (
    <div className="kvis-final-step">
      <div className="kvis-final-left">
        <h2 className="kvis-final-title">Почти готово! Введите номер, на который отправить расчёт и закрепите за собой скидку в 20%.</h2>
        <p className="kvis-promo-text">А также для всех жителей города действует акция на первое посещение стоматологии:</p>
        <ul className="kvis-promo-list">
          <li>Бесплатный прием</li>
          <li>3D-снимок или снимок ОПТГ</li>
          <li>План лечения И все это совершенно БЕСПЛАТНО</li>
        </ul>
        <div className="kvis-discount-badge">Ваша скидка: 20%</div>
      </div>
      <div className="kvis-final-right">
        <h3 className="kvis-messenger-title">Куда присылать результаты?</h3>
        <div className="kvis-messenger-buttons">
          <button
            className={`kvis-messenger-btn kvis-viber-btn ${messengerType === 'viber' ? 'active' : ''}`}
            onClick={() => setMessengerType('viber')}
          >
            <div className="kvis-messenger-icon-circle kvis-viber-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.5 2C7.26 2 3 6.26 3 11.5C3 13.83 3.75 15.98 4.99 17.72L3.5 20.5L6.5 19.01C8.18 20.18 10.25 20.9 12.5 20.9C17.74 20.9 22 16.64 22 11.4C22 6.16 17.74 2 12.5 2ZM15.5 14.5C15.22 14.78 13.5 15.5 13.5 15.5C13.5 15.5 12.78 15.78 12.5 15.5C12.22 15.22 10.5 13.5 10.5 13.5C10.5 13.5 9.78 11.78 10.5 11.5C11.22 11.22 12.5 12.5 12.5 12.5C12.5 12.5 13.78 11.22 14.5 11.5C15.22 11.78 15.5 14.5 15.5 14.5Z" fill="white"/>
                <path d="M17.5 7.5C17.22 7.78 15.5 8.5 15.5 8.5C15.5 8.5 14.78 8.78 14.5 8.5C14.22 8.22 12.5 6.5 12.5 6.5C12.5 6.5 11.78 4.78 12.5 4.5C13.22 4.22 14.5 5.5 14.5 5.5C14.5 5.5 15.78 4.22 16.5 4.5C17.22 4.78 17.5 7.5 17.5 7.5Z" fill="white" opacity="0.8"/>
              </svg>
            </div>
            <span className="kvis-messenger-text">Viber</span>
          </button>
          <button
            className={`kvis-messenger-btn kvis-whatsapp-btn ${messengerType === 'whatsapp' ? 'active' : ''}`}
            onClick={() => setMessengerType('whatsapp')}
          >
            <div className="kvis-messenger-icon-circle kvis-whatsapp-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="white"/>
              </svg>
            </div>
            <span className="kvis-messenger-text">WhatsApp</span>
          </button>
          <button
            className={`kvis-messenger-btn kvis-phone-btn ${messengerType === 'phone' ? 'active' : ''}`}
            onClick={() => setMessengerType('phone')}
          >
            <div className="kvis-messenger-icon-circle kvis-phone-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
              </svg>
            </div>
            <span className="kvis-messenger-text">Телефон</span>
          </button>
        </div>
        <label className="kvis-checkbox-label">
          <input
            type="checkbox"
            checked={privacyConsent}
            onChange={(e) => setPrivacyConsent(e.target.checked)}
            className="kvis-checkbox-input"
          />
          <span className="kvis-checkbox-text">
            Я соглашаюсь на обработку персональных данных согласно{' '}
            <a href="/privacy" className="kvis-privacy-link">политике конфиденциальности</a>
          </span>
        </label>
        <p className="kvis-disclaimer">* Продукт компании Мета, признана экстремистской организацией в России</p>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      case 6:
        return renderStep6();
      case 7:
        return renderStep7();
      case 8:
        return renderStep8();
      case 9:
        return renderStep9();
      case 10:
        return renderStep10();
      case 11:
        return renderStep11();
      case 12:
        return renderStep12();
      case 13:
        return renderStep13();
      case 14:
        return renderStep14();
      case 15:
        return renderStep15();
      case 16:
        return renderStep16();
      case 17:
        return renderStep17();
      case 18:
        return renderStep18();
      case 19:
        return renderStep19();
      case 20:
        return renderStep20();
      case 21:
        return renderStep21();
      case 22:
        return renderStep22();
      case 23:
        return renderStep23();
      case 24:
        return renderStep24();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="kvis-container">
      <div className="kvis-card">
        {renderCurrentStep()}

        <div className="kvis-navigation">
          <button 
            className="kvis-btn-back" 
            onClick={handleBack}
            disabled={step === 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="kvis-next-wrapper">
            {step === 6 && (
              <button className="kvis-btn-next" onClick={handleNext}>
                Отправить
              </button>
            )}
            {/* <button className="kvis-btn-next" onClick={handleNext}>
              {(step === 5 || step === 9 || step === 12 || step === 16 || step === 18 || step === 20 || step === 22 || step === 24) ? 'Последний шаг' : step === 6 ? 'Отправить' : 'Далее →'}
            </button>
            {step !== 6 && <span className="kvis-enter-hint">или нажмите Enter</span>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kvis;
