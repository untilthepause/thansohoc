"use strict";
var NumerologyEngine = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/lib/numerology/index.ts
  var index_exports = {};
  __export(index_exports, {
    BIRTHDAY_INTERPRETATIONS: () => BIRTHDAY_INTERPRETATIONS,
    CALCULATION_VERSION: () => CALCULATION_VERSION,
    EXPRESSION_INTERPRETATIONS: () => EXPRESSION_INTERPRETATIONS,
    LIFE_PATH_DETAIL: () => LIFE_PATH_DETAIL,
    LIFE_PATH_GROUP_LABELS: () => LIFE_PATH_GROUP_LABELS,
    LIFE_PATH_INTERPRETATIONS: () => LIFE_PATH_INTERPRETATIONS,
    LIFE_PATH_TO_GROUP: () => LIFE_PATH_TO_GROUP,
    NUMEROLOGY_SYSTEM: () => NUMEROLOGY_SYSTEM,
    NumerologyError: () => NumerologyError,
    PERSONALITY_INTERPRETATIONS: () => PERSONALITY_INTERPRETATIONS,
    PERSONALITY_NULL_TEXT: () => PERSONALITY_NULL_TEXT,
    PERSONAL_DAY_INTERPRETATIONS: () => PERSONAL_DAY_INTERPRETATIONS,
    PERSONAL_MONTH_INTERPRETATIONS: () => PERSONAL_MONTH_INTERPRETATIONS,
    PERSONAL_YEAR_INTERPRETATIONS: () => PERSONAL_YEAR_INTERPRETATIONS,
    PYTHAGOREAN_MAP: () => PYTHAGOREAN_MAP,
    SOUL_URGE_INTERPRETATIONS: () => SOUL_URGE_INTERPRETATIONS,
    SOUL_URGE_NULL_TEXT: () => SOUL_URGE_NULL_TEXT,
    VOWELS: () => VOWELS,
    calculateBirthdayNumber: () => calculateBirthdayNumber,
    calculateExpressionNumber: () => calculateExpressionNumber,
    calculateLifePath: () => calculateLifePath,
    calculateNumerologyProfile: () => calculateNumerologyProfile,
    calculatePersonalDay: () => calculatePersonalDay,
    calculatePersonalMonth: () => calculatePersonalMonth,
    calculatePersonalYear: () => calculatePersonalYear,
    calculatePersonalityNumber: () => calculatePersonalityNumber,
    calculateSoulUrge: () => calculateSoulUrge,
    compareLifePathNumbers: () => compareLifePathNumbers,
    digitsOf: () => digitsOf,
    getLifePathDetail: () => getLifePathDetail,
    getLifePathGroup: () => getLifePathGroup,
    getPythagoreanValue: () => getPythagoreanValue,
    interpretBirthday: () => interpretBirthday,
    interpretExpression: () => interpretExpression,
    interpretLifePath: () => interpretLifePath,
    interpretPersonalDay: () => interpretPersonalDay,
    interpretPersonalMonth: () => interpretPersonalMonth,
    interpretPersonalYear: () => interpretPersonalYear,
    interpretPersonality: () => interpretPersonality,
    interpretSoulUrge: () => interpretSoulUrge,
    isConsonant: () => isConsonant,
    isMasterNumber: () => isMasterNumber,
    isVowel: () => isVowel,
    normalizeVietnameseName: () => normalizeVietnameseName,
    parseIsoDate: () => parseIsoDate,
    reduceNumber: () => reduceNumber,
    reduceNumberWithSteps: () => reduceNumberWithSteps,
    sumDigits: () => sumDigits,
    validateBirthDate: () => validateBirthDate,
    validateBirthDateStructure: () => validateBirthDateStructure,
    validateMonth: () => validateMonth,
    validateTargetDate: () => validateTargetDate,
    validateTargetYear: () => validateTargetYear
  });

  // src/lib/numerology/version.ts
  var NUMEROLOGY_SYSTEM = "pythagorean";
  var CALCULATION_VERSION = "1.0";

  // src/lib/numerology/constants/pythagorean-map.ts
  var PYTHAGOREAN_MAP = Object.freeze({
    A: 1,
    J: 1,
    S: 1,
    B: 2,
    K: 2,
    T: 2,
    C: 3,
    L: 3,
    U: 3,
    D: 4,
    M: 4,
    V: 4,
    E: 5,
    N: 5,
    W: 5,
    F: 6,
    O: 6,
    X: 6,
    G: 7,
    P: 7,
    Y: 7,
    H: 8,
    Q: 8,
    Z: 8,
    I: 9,
    R: 9
  });
  function getPythagoreanValue(letter) {
    return PYTHAGOREAN_MAP[letter];
  }

  // src/lib/numerology/constants/vowels.ts
  var VOWELS = /* @__PURE__ */ new Set(["A", "E", "I", "O", "U"]);
  function isVowel(letter) {
    return VOWELS.has(letter);
  }
  function isConsonant(letter) {
    return /^[A-Z]$/.test(letter) && !VOWELS.has(letter);
  }

  // src/lib/numerology/types/errors.ts
  var NumerologyError = class extends Error {
    constructor(code, message) {
      super(message ?? code);
      __publicField(this, "code");
      this.code = code;
      this.name = "NumerologyError";
    }
  };

  // src/lib/numerology/utils/normalize-name.ts
  function normalizeVietnameseName(name) {
    const withoutDiacritics = name.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/Đ/g, "D").replace(/đ/g, "d");
    const normalized = withoutDiacritics.toUpperCase().replace(/[^A-Z]/g, " ").replace(/\s+/g, " ").trim();
    if (!/[A-Z]/.test(normalized)) {
      throw new NumerologyError(
        "INVALID_NAME",
        "Name does not contain at least one A-Z character after normalization."
      );
    }
    return normalized;
  }

  // src/lib/numerology/utils/sum-digits.ts
  function sumDigits(value) {
    const digits = digitsOf(value);
    return digits.reduce((a, b) => a + b, 0);
  }
  function digitsOf(value) {
    const abs = Math.abs(Math.trunc(value));
    return abs.toString().split("").map((ch) => Number(ch));
  }

  // src/lib/numerology/utils/reduce-number.ts
  var MASTER_NUMBERS = /* @__PURE__ */ new Set([11, 22, 33]);
  function isMasterNumber(value) {
    return MASTER_NUMBERS.has(value);
  }
  function reduceNumber(value, preserveMasterNumbers = true) {
    let current = value;
    while (true) {
      if (preserveMasterNumbers && isMasterNumber(current)) {
        return current;
      }
      if (current <= 9) {
        return current;
      }
      current = digitsOf(current).reduce((a, b) => a + b, 0);
    }
  }
  function reduceNumberWithSteps(value, options = {}) {
    const { preserveMasterNumbers = true, stepPrefix = "" } = options;
    const steps = [];
    let current = value;
    while (true) {
      if (preserveMasterNumbers && isMasterNumber(current)) break;
      if (current <= 9) break;
      const digits = digitsOf(current);
      const next = digits.reduce((a, b) => a + b, 0);
      steps.push(`${stepPrefix}${digits.join(" + ")} = ${next}`);
      current = next;
    }
    return { number: current, steps };
  }

  // src/lib/numerology/utils/validate-date.ts
  var ISO_DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
  var MIN_BIRTH_YEAR = 1900;
  function parseIsoDate(dateStr) {
    const match = ISO_DATE_RE.exec(dateStr);
    if (!match) {
      throw new NumerologyError("INVALID_DATE", `Not an ISO date: ${dateStr}`);
    }
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const asUtc = new Date(Date.UTC(year, month - 1, day));
    const roundTrips = asUtc.getUTCFullYear() === year && asUtc.getUTCMonth() === month - 1 && asUtc.getUTCDate() === day;
    if (!roundTrips) {
      throw new NumerologyError(
        "INVALID_DATE",
        `${dateStr} is not a real Gregorian calendar date.`
      );
    }
    return { year, month, day };
  }
  function compareDateParts(a, b) {
    if (a.year !== b.year) return a.year - b.year;
    if (a.month !== b.month) return a.month - b.month;
    return a.day - b.day;
  }
  function validateBirthDateStructure(dateOfBirth) {
    const parts = parseIsoDate(dateOfBirth);
    if (parts.year < MIN_BIRTH_YEAR) {
      throw new NumerologyError(
        "DATE_OUT_OF_RANGE",
        `Birth year ${parts.year} is before ${MIN_BIRTH_YEAR}.`
      );
    }
    return parts;
  }
  function validateBirthDate(dateOfBirth, referenceDate) {
    const parts = validateBirthDateStructure(dateOfBirth);
    const today = parseIsoDate(referenceDate);
    if (compareDateParts(parts, today) > 0) {
      throw new NumerologyError(
        "FUTURE_BIRTH_DATE",
        `${dateOfBirth} is after the reference date ${referenceDate}.`
      );
    }
    return parts;
  }
  function validateTargetYear(year) {
    if (!Number.isInteger(year) || year < 1e3 || year > 9999) {
      throw new NumerologyError("INVALID_YEAR", `Invalid target year: ${year}`);
    }
    return year;
  }
  function validateMonth(month) {
    if (!Number.isInteger(month) || month < 1 || month > 12) {
      throw new NumerologyError("INVALID_MONTH", `Invalid month: ${month}`);
    }
    return month;
  }
  function validateTargetDate(dateStr) {
    try {
      return parseIsoDate(dateStr);
    } catch {
      throw new NumerologyError(
        "INVALID_TARGET_DATE",
        `Invalid target date: ${dateStr}`
      );
    }
  }

  // src/lib/numerology/calculations/life-path.ts
  function calculateLifePath(dateOfBirth, referenceDate) {
    const { year, month, day } = validateBirthDate(dateOfBirth, referenceDate);
    const digits = `${String(year).padStart(4, "0")}${String(month).padStart(
      2,
      "0"
    )}${String(day).padStart(2, "0")}`.split("").map(Number);
    const rawTotal = digits.reduce((a, b) => a + b, 0);
    const steps = [`Digits: ${digits.join(" + ")} = ${rawTotal}`];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(rawTotal, {
      stepPrefix: "Reduction: "
    });
    steps.push(...reduceSteps);
    return { number, rawTotal, calculationSteps: steps };
  }

  // src/lib/numerology/calculations/birthday.ts
  function calculateBirthdayNumber(dateOfBirth, referenceDate) {
    const { day } = validateBirthDate(dateOfBirth, referenceDate);
    const steps = [`Birthday day: ${day}`];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(day, {
      stepPrefix: ""
    });
    steps.push(...reduceSteps);
    return { number, rawTotal: day, calculationSteps: steps };
  }

  // src/lib/numerology/utils/letter-values.ts
  function letterSum(normalizedName, filter) {
    const letters = normalizedName.replace(/\s+/g, "").split("");
    const tokens = [];
    let total = 0;
    for (const letter of letters) {
      if (!filter(letter)) continue;
      const value = getPythagoreanValue(letter);
      if (value === void 0) continue;
      tokens.push(`${letter}(${value})`);
      total += value;
    }
    return { total, tokens };
  }

  // src/lib/numerology/calculations/expression.ts
  function calculateExpressionNumber(fullName) {
    const normalizedName = normalizeVietnameseName(fullName);
    const { total, tokens } = letterSum(normalizedName, () => true);
    if (total === 0) {
      throw new NumerologyError(
        "INVALID_NAME",
        "Expression total is 0 \u2014 no valid letters to calculate from."
      );
    }
    const steps = [`${tokens.join(" + ")} = ${total}`];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(total, {
      stepPrefix: "Reduction: "
    });
    steps.push(...reduceSteps);
    return { number, rawTotal: total, calculationSteps: steps, normalizedName };
  }

  // src/lib/numerology/calculations/soul-urge.ts
  function calculateSoulUrge(fullName) {
    const normalizedName = normalizeVietnameseName(fullName);
    const { total, tokens } = letterSum(normalizedName, isVowel);
    if (tokens.length === 0) {
      return {
        number: null,
        rawTotal: 0,
        calculationSteps: [
          "Kh\xF4ng \u0111\u1EE7 d\u1EEF li\u1EC7u \u0111\u1EC3 t\xEDnh theo quy t\u1EAFc hi\u1EC7n t\u1EA1i: kh\xF4ng c\xF3 nguy\xEAn \xE2m (A/E/I/O/U) trong t\xEAn."
        ],
        normalizedName
      };
    }
    const steps = [`${tokens.join(" + ")} = ${total}`];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(total, {
      stepPrefix: "Reduction: "
    });
    steps.push(...reduceSteps);
    return { number, rawTotal: total, calculationSteps: steps, normalizedName };
  }

  // src/lib/numerology/calculations/personality.ts
  function calculatePersonalityNumber(fullName) {
    const normalizedName = normalizeVietnameseName(fullName);
    const { total, tokens } = letterSum(normalizedName, isConsonant);
    if (tokens.length === 0) {
      return {
        number: null,
        rawTotal: 0,
        calculationSteps: [
          "Kh\xF4ng \u0111\u1EE7 d\u1EEF li\u1EC7u \u0111\u1EC3 t\xEDnh theo quy t\u1EAFc hi\u1EC7n t\u1EA1i: kh\xF4ng c\xF3 ph\u1EE5 \xE2m trong t\xEAn."
        ],
        normalizedName
      };
    }
    const steps = [`${tokens.join(" + ")} = ${total}`];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(total, {
      stepPrefix: "Reduction: "
    });
    steps.push(...reduceSteps);
    return { number, rawTotal: total, calculationSteps: steps, normalizedName };
  }

  // src/lib/numerology/calculations/personal-year.ts
  function calculatePersonalYear(dateOfBirth, targetYear) {
    const { month, day } = validateBirthDateStructure(dateOfBirth);
    validateTargetYear(targetYear);
    const dayDigits = String(day).padStart(2, "0").split("").map(Number);
    const monthDigits = String(month).padStart(2, "0").split("").map(Number);
    const yearDigits = String(targetYear).split("").map(Number);
    const allDigits = [...dayDigits, ...monthDigits, ...yearDigits];
    const rawTotal = allDigits.reduce((a, b) => a + b, 0);
    const steps = [
      `Birth day: ${String(day).padStart(2, "0")} \u2192 ${dayDigits.join(" + ")}`,
      `Birth month: ${String(month).padStart(2, "0")} \u2192 ${monthDigits.join(
        " + "
      )}`,
      `Target year: ${targetYear} \u2192 ${yearDigits.join(" + ")}`,
      `Total: ${allDigits.join(" + ")} = ${rawTotal}`
    ];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(rawTotal, {
      stepPrefix: "Reduction: "
    });
    steps.push(...reduceSteps);
    return { number, rawTotal, calculationSteps: steps };
  }

  // src/lib/numerology/calculations/personal-month.ts
  function calculatePersonalMonth(dateOfBirth, year, month) {
    validateMonth(month);
    const personalYear = calculatePersonalYear(dateOfBirth, year);
    const rawTotal = personalYear.number + month;
    const steps = [
      `Personal Year: ${personalYear.number}`,
      `Calendar Month: ${month}`,
      `${personalYear.number} + ${month} = ${rawTotal}`
    ];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(rawTotal, {
      stepPrefix: ""
    });
    steps.push(...reduceSteps);
    return { number, rawTotal, calculationSteps: steps };
  }

  // src/lib/numerology/calculations/personal-day.ts
  function calculatePersonalDay(dateOfBirth, targetDate) {
    const { year, month, day } = validateTargetDate(targetDate);
    const personalMonth = calculatePersonalMonth(dateOfBirth, year, month);
    const rawTotal = personalMonth.number + day;
    const steps = [
      `Personal Month: ${personalMonth.number}`,
      `Calendar Day: ${day}`,
      `${personalMonth.number} + ${day} = ${rawTotal}`
    ];
    const { number, steps: reduceSteps } = reduceNumberWithSteps(rawTotal, {
      stepPrefix: ""
    });
    steps.push(...reduceSteps);
    return { number, rawTotal, calculationSteps: steps };
  }

  // src/lib/numerology/calculations/profile.ts
  function calculateNumerologyProfile(input) {
    const { fullName, dateOfBirth, referenceDate } = input;
    return {
      lifePath: calculateLifePath(dateOfBirth, referenceDate),
      birthday: calculateBirthdayNumber(dateOfBirth, referenceDate),
      expression: calculateExpressionNumber(fullName),
      soulUrge: calculateSoulUrge(fullName),
      personality: calculatePersonalityNumber(fullName),
      calculationVersion: CALCULATION_VERSION
    };
  }

  // src/lib/numerology/interpretations.ts
  var LIFE_PATH_INTERPRETATIONS = {
    1: "\u0110\u1ED9c l\u1EADp, c\xF3 tinh th\u1EA7n l\xE3nh \u0111\u1EA1o, th\xEDch t\u1EF1 m\xECnh quy\u1EBFt \u0111\u1ECBnh v\xE0 kh\xF4ng ng\u1EA1i \u0111i \u0111\u1EA7u. B\xE0i h\u1ECDc l\u1EDBn l\xE0 h\u1ECDc c\xE1ch \u0111\u1EE9ng v\u1EEFng m\u1ED9t m\xECnh m\xE0 kh\xF4ng tr\u1EDF n\xEAn b\u1EA3o th\u1EE7 hay c\xF4 l\u1EADp. \u0110i\u1EC3m m\u1EA1nh: s\xE1ng t\u1EA1o, quy\u1EBFt \u0111o\xE1n. Th\xE1ch th\u1EE9c: d\u1EC5 n\xF3ng v\u1ED9i, kh\xF3 chia s\u1EBB quy\u1EC1n ki\u1EC3m so\xE1t.",
    2: "Nh\u1EA1y c\u1EA3m, tinh t\u1EBF, gi\u1ECFi l\u1EAFng nghe v\xE0 k\u1EBFt n\u1ED1i ng\u01B0\u1EDDi kh\xE1c. Ph\xE1t tri\u1EC3n t\u1ED1t nh\u1EA5t trong m\xF4i tr\u01B0\u1EDDng h\u1EE3p t\xE1c, l\xE0m vi\u1EC7c nh\xF3m. \u0110i\u1EC3m m\u1EA1nh: ki\xEAn nh\u1EABn, ngo\u1EA1i giao. Th\xE1ch th\u1EE9c: d\u1EC5 ph\u1EE5 thu\u1ED9c c\u1EA3m x\xFAc v\xE0o ng\u01B0\u1EDDi kh\xE1c, ng\u1EA1i xung \u0111\u1ED9t \u0111\u1EBFn m\u1EE9c im l\u1EB7ng ch\u1ECBu \u0111\u1EF1ng.",
    3: "Gi\xE0u c\u1EA3m x\xFAc, c\xF3 khi\u1EBFu bi\u1EC3u \u0111\u1EA1t (n\xF3i, vi\u1EBFt, ngh\u1EC7 thu\u1EADt), mang n\u0103ng l\u01B0\u1EE3ng l\u1EA1c quan cho ng\u01B0\u1EDDi xung quanh. \u0110i\u1EC3m m\u1EA1nh: s\xE1ng t\u1EA1o, h\xE0i h\u01B0\u1EDBc, truy\u1EC1n c\u1EA3m h\u1EE9ng. Th\xE1ch th\u1EE9c: d\u1EC5 ph\xE2n t\xE1n, n\xF3i nhi\u1EC1u h\u01A1n l\xE0m, n\xE9 tr\xE1nh c\u1EA3m x\xFAc ti\xEAu c\u1EF1c b\u1EB1ng s\u1EF1 vui v\u1EBB b\u1EC1 ngo\xE0i.",
    4: "Th\u1EF1c t\u1EBF, k\u1EF7 lu\u1EADt, coi tr\u1ECDng s\u1EF1 \u1ED5n \u0111\u1ECBnh v\xE0 l\xE0m vi\u1EC7c c\xF3 h\u1EC7 th\u1ED1ng. L\xE0 ng\u01B0\u1EDDi \u0111\u1EB7t n\u1EC1n m\xF3ng b\u1EC1n v\u1EEFng cho m\u1ECDi k\u1EBF ho\u1EA1ch d\xE0i h\u1EA1n. \u0110i\u1EC3m m\u1EA1nh: \u0111\xE1ng tin c\u1EADy, ki\xEAn tr\xEC. Th\xE1ch th\u1EE9c: c\u1EE9ng nh\u1EAFc, ng\u1EA1i thay \u0111\u1ED5i, d\u1EC5 l\xE0m vi\u1EC7c qu\xE1 s\u1EE9c v\xEC tr\xE1ch nhi\u1EC7m.",
    5: "Ham thay \u0111\u1ED5i, th\xEDch tr\u1EA3i nghi\u1EC7m m\u1EDBi, kh\xF4ng ch\u1ECBu \u0111\u01B0\u1EE3c s\u1EF1 g\xF2 b\xF3 l\u1EB7p l\u1EA1i. H\u1ECDc \u0111\u01B0\u1EE3c nhi\u1EC1u nh\u1EA5t qua va ch\u1EA1m th\u1EF1c t\u1EBF h\u01A1n l\xE0 l\xFD thuy\u1EBFt. \u0110i\u1EC3m m\u1EA1nh: linh ho\u1EA1t, th\xEDch nghi nhanh. Th\xE1ch th\u1EE9c: thi\u1EBFu ki\xEAn \u0111\u1ECBnh, d\u1EC5 b\u1ECF d\u1EDF gi\u1EEFa ch\u1EEBng.",
    6: "C\xF3 tr\xE1ch nhi\u1EC7m cao v\u1EDBi gia \u0111\xECnh, c\u1ED9ng \u0111\u1ED3ng; \u0111\u1EB7t n\u1EB7ng s\u1EF1 h\xE0i h\xF2a v\xE0 c\xF4ng b\u1EB1ng trong c\xE1c m\u1ED1i quan h\u1EC7. \u0110i\u1EC3m m\u1EA1nh: t\u1EADn t\xE2m, \u0111\xE1ng tin. Th\xE1ch th\u1EE9c: \xF4m \u0111\u1ED3m tr\xE1ch nhi\u1EC7m c\u1EE7a ng\u01B0\u1EDDi kh\xE1c, d\u1EC5 hy sinh nhu c\u1EA7u b\u1EA3n th\xE2n qu\xE1 m\u1EE9c.",
    7: 'Thi\xEAn v\u1EC1 n\u1ED9i t\xE2m, th\xEDch ph\xE2n t\xEDch, \u0111\u1EB7t c\xE2u h\u1ECFi "t\u1EA1i sao" thay v\xEC ch\u1EA5p nh\u1EADn b\u1EC1 m\u1EB7t. C\u1EA7n th\u1EDDi gian \u1EDF m\u1ED9t m\xECnh \u0111\u1EC3 n\u1EA1p l\u1EA1i n\u0103ng l\u01B0\u1EE3ng. \u0110i\u1EC3m m\u1EA1nh: t\u01B0 duy s\xE2u, tr\u1EF1c gi\xE1c t\u1ED1t. Th\xE1ch th\u1EE9c: kh\xE9p k\xEDn, ho\xE0i nghi qu\xE1 m\u1EE9c, kh\xF3 m\u1EDF l\xF2ng tin t\u01B0\u1EDFng.',
    8: "C\xF3 t\u1EA7m nh\xECn l\u1EDBn v\u1EC1 v\u1EADt ch\u1EA5t, s\u1EF1 nghi\u1EC7p, ti\u1EC1n b\u1EA1c; gi\u1ECFi t\u1ED5 ch\u1EE9c v\xE0 qu\u1EA3n l\xFD ngu\u1ED3n l\u1EF1c. \u0110i\u1EC3m m\u1EA1nh: quy\u1EBFt \u0111o\xE1n, tham v\u1ECDng l\xE0nh m\u1EA1nh. Th\xE1ch th\u1EE9c: d\u1EC5 \u0111\xE1nh gi\xE1 th\xE0nh c\xF4ng ch\u1EC9 qua v\u1EADt ch\u1EA5t, c\xF3 xu h\u01B0\u1EDBng ki\u1EC3m so\xE1t ng\u01B0\u1EDDi kh\xE1c.",
    9: "Bao dung, l\xFD t\u01B0\u1EDFng h\xF3a, quan t\xE2m \u0111\u1EBFn nh\u1EEFng v\u1EA5n \u0111\u1EC1 l\u1EDBn h\u01A1n b\u1EA3n th\xE2n (c\u1ED9ng \u0111\u1ED3ng, nh\xE2n lo\u1EA1i). B\xE0i h\u1ECDc l\xE0 h\u1ECDc c\xE1ch bu\xF4ng b\u1ECF m\xE0 kh\xF4ng t\u1ED5n th\u01B0\u01A1ng. \u0110i\u1EC3m m\u1EA1nh: v\u1ECB tha, gi\xE0u c\u1EA3m h\u1EE9ng. Th\xE1ch th\u1EE9c: hay \xF4m m\u1ED9ng t\u01B0\u1EDFng xa r\u1EDDi th\u1EF1c t\u1EBF, kh\xF3 d\u1EE9t kho\xE1t khi k\u1EBFt th\xFAc m\u1ED9t giai \u0111o\u1EA1n.",
    11: 'Tr\u1EF1c gi\xE1c c\u1EF1c nh\u1EA1y, nh\xECn th\u1EA5y \u0111i\u1EC1u ng\u01B0\u1EDDi kh\xE1c kh\xF4ng th\u1EA5y, c\xF3 kh\u1EA3 n\u0103ng truy\u1EC1n c\u1EA3m h\u1EE9ng m\u1EA1nh m\u1EBD. Mang n\u0103ng l\u01B0\u1EE3ng g\u1EA5p \u0111\xF4i s\u1ED1 2 nh\u01B0ng \u0111i k\xE8m \xE1p l\u1EF1c tinh th\u1EA7n l\u1EDBn h\u01A1n. \u0110i\u1EC3m m\u1EA1nh: t\u1EA7m nh\xECn, s\u1EE9c \u1EA3nh h\u01B0\u1EDFng. Th\xE1ch th\u1EE9c: d\u1EC5 lo \xE2u, qu\xE1 nh\u1EA1y c\u1EA3m v\u1EDBi n\u0103ng l\u01B0\u1EE3ng xung quanh, c\u1EA7n h\u1ECDc c\xE1ch "h\u1EA1 c\xE1nh" th\xE0nh h\xE0nh \u0111\u1ED9ng c\u1EE5 th\u1EC3.',
    22: "K\u1EBFt h\u1EE3p t\u1EA7m nh\xECn l\u1EDBn (nh\u01B0 s\u1ED1 11) v\u1EDBi kh\u1EA3 n\u0103ng bi\u1EBFn \xFD t\u01B0\u1EDFng th\xE0nh hi\u1EC7n th\u1EF1c \u1EDF quy m\xF4 l\u1EDBn (nh\u01B0 s\u1ED1 4). C\xF3 ti\u1EC1m n\u0103ng t\u1EA1o ra \u1EA3nh h\u01B0\u1EDFng l\xE2u d\xE0i, h\u1EEFu h\xECnh. \u0110i\u1EC3m m\u1EA1nh: v\u1EEBa m\u01A1 l\u1EDBn v\u1EEBa l\xE0m \u0111\u01B0\u1EE3c. Th\xE1ch th\u1EE9c: \xE1p l\u1EF1c t\u1EF1 \u0111\u1EB7t ra r\u1EA5t cao, d\u1EC5 ki\u1EC7t s\u1EE9c n\u1EBFu kh\xF4ng c\xF3 k\u1EBF ho\u1EA1ch th\u1EF1c t\u1EBF.",
    33: "Hi\u1EBFm g\u1EB7p nh\u1EA5t, mang n\u0103ng l\u01B0\u1EE3ng ph\u1EE5ng s\u1EF1 v\xF4 \u0111i\u1EC1u ki\u1EC7n, \u0111\u1EB7t h\u1EA1nh ph\xFAc c\u1EE7a ng\u01B0\u1EDDi kh\xE1c l\xEAn h\xE0ng \u0111\u1EA7u. K\u1EBFt h\u1EE3p s\u1EF1 s\xE1ng t\u1EA1o (3) v\u1EDBi tr\xE1ch nhi\u1EC7m ch\u0103m s\xF3c (6) \u1EDF t\u1EA7m m\u1EE9c cao h\u01A1n. \u0110i\u1EC3m m\u1EA1nh: l\xF2ng tr\u1EAFc \u1EA9n s\xE2u s\u1EAFc. Th\xE1ch th\u1EE9c: r\u1EA5t d\u1EC5 hy sinh b\u1EA3n th\xE2n qu\xE1 m\u1EE9c, c\u1EA7n h\u1ECDc c\xE1ch ch\u0103m s\xF3c ch\xEDnh m\xECnh tr\u01B0\u1EDBc."
  };
  var EXPRESSION_INTERPRETATIONS = {
    1: "Ti\u1EC1m n\u0103ng l\xE3nh \u0111\u1EA1o, kh\u1EDFi x\u01B0\u1EDBng. Ph\xF9 h\u1EE3p v\u1EDBi vai tr\xF2 ti\xEAn phong, t\u1EF1 l\xE0m ch\u1EE7, ho\u1EB7c d\u1EABn d\u1EAFt m\u1ED9t nh\xF3m/d\u1EF1 \xE1n ri\xEAng.",
    2: "Ti\u1EC1m n\u0103ng ngo\u1EA1i giao, h\u1ED7 tr\u1EE3. Ph\xE1t huy t\u1ED1t nh\u1EA5t khi l\xE0m c\u1EA7u n\u1ED1i, \u0111i\u1EC1u ph\u1ED1i, ho\u1EB7c l\xE0m vi\u1EC7c song h\xE0nh c\xF9ng m\u1ED9t \u0111\u1ED1i t\xE1c/nh\xF3m.",
    3: "Ti\u1EC1m n\u0103ng bi\u1EC3u \u0111\u1EA1t, ngh\u1EC7 thu\u1EADt, giao ti\u1EBFp. Ph\xF9 h\u1EE3p v\u1EDBi c\xF4ng vi\u1EC7c li\xEAn quan \u0111\u1EBFn vi\u1EBFt, n\xF3i tr\u01B0\u1EDBc c\xF4ng ch\xFAng, s\xE1ng t\u1EA1o n\u1ED9i dung, gi\u1EA3i tr\xED.",
    4: "Ti\u1EC1m n\u0103ng t\u1ED5 ch\u1EE9c, x\xE2y d\u1EF1ng h\u1EC7 th\u1ED1ng. Ph\xF9 h\u1EE3p v\u1EDBi c\xF4ng vi\u1EC7c \u0111\xF2i h\u1ECFi quy tr\xECnh r\xF5 r\xE0ng, k\u1EF9 thu\u1EADt, qu\u1EA3n l\xFD v\u1EADn h\xE0nh.",
    5: "Ti\u1EC1m n\u0103ng th\xEDch nghi, k\u1EBFt n\u1ED1i \u0111a d\u1EA1ng. Ph\xF9 h\u1EE3p v\u1EDBi c\xF4ng vi\u1EC7c c\xF3 t\xEDnh di chuy\u1EC3n, thay \u0111\u1ED5i li\xEAn t\u1EE5c, ti\u1EBFp x\xFAc nhi\u1EC1u ng\u01B0\u1EDDi/l\u0129nh v\u1EF1c.",
    6: 'Ti\u1EC1m n\u0103ng ch\u0103m s\xF3c, gi\u1EA3ng d\u1EA1y, ph\u1EE5c v\u1EE5 c\u1ED9ng \u0111\u1ED3ng. Ph\xF9 h\u1EE3p v\u1EDBi gi\xE1o d\u1EE5c, y t\u1EBF, t\u01B0 v\u1EA5n, ho\u1EB7c vai tr\xF2 "ng\u01B0\u1EDDi gi\u1EEF l\u1EEDa" trong t\u1ED5 ch\u1EE9c/gia \u0111\xECnh.',
    7: "Ti\u1EC1m n\u0103ng nghi\xEAn c\u1EE9u, ph\xE2n t\xEDch chuy\xEAn s\xE2u. Ph\xF9 h\u1EE3p v\u1EDBi c\xF4ng vi\u1EC7c \u0111\xF2i h\u1ECFi t\u01B0 duy \u0111\u1ED9c l\u1EADp, chuy\xEAn m\xF4n h\xF3a cao, \xEDt c\u1EA7n giao ti\u1EBFp b\u1EC1 m\u1EB7t.",
    8: "Ti\u1EC1m n\u0103ng qu\u1EA3n l\xFD, kinh doanh, t\u1EA1o ra gi\xE1 tr\u1ECB v\u1EADt ch\u1EA5t \u1EDF quy m\xF4 l\u1EDBn. Ph\xF9 h\u1EE3p v\u1EDBi vai tr\xF2 \u0111i\u1EC1u h\xE0nh, t\xE0i ch\xEDnh, ho\u1EB7ch \u0111\u1ECBnh chi\u1EBFn l\u01B0\u1EE3c.",
    9: "Ti\u1EC1m n\u0103ng truy\u1EC1n c\u1EA3m h\u1EE9ng tr\xEAn di\u1EC7n r\u1ED9ng, ho\u1EA1t \u0111\u1ED9ng v\xEC m\u1EE5c \u0111\xEDch l\u1EDBn h\u01A1n l\u1EE3i \xEDch c\xE1 nh\xE2n. Ph\xF9 h\u1EE3p v\u1EDBi c\xF4ng vi\u1EC7c mang t\xEDnh c\u1ED1ng hi\u1EBFn, ngh\u1EC7 thu\u1EADt c\xF3 chi\u1EC1u s\xE2u nh\xE2n v\u0103n.",
    11: 'Ti\u1EC1m n\u0103ng Master \u2014 truy\u1EC1n c\u1EA3m h\u1EE9ng, d\u1EABn d\u1EAFt tinh th\u1EA7n. C\u1EA7n m\u1ED9t "k\xEAnh" c\u1EE5 th\u1EC3 (ngh\u1EC7 thu\u1EADt, gi\u1EA3ng d\u1EA1y, t\u01B0 v\u1EA5n) \u0111\u1EC3 kh\xF4ng l\xE3ng ph\xED ngu\u1ED3n n\u0103ng l\u01B0\u1EE3ng tr\u1EF1c gi\xE1c m\u1EA1nh m\u1EBD n\xE0y.',
    22: "Ti\u1EC1m n\u0103ng Master \u2014 bi\u1EBFn t\u1EA7m nh\xECn l\u1EDBn th\xE0nh c\xF4ng tr\xECnh/t\u1ED5 ch\u1EE9c th\u1EF1c t\u1EBF, quy m\xF4 l\u1EDBn. \u0110\xE2y l\xE0 con s\u1ED1 c\u1EE7a nh\u1EEFng ng\u01B0\u1EDDi x\xE2y d\u1EF1ng di s\u1EA3n l\xE2u d\xE0i.",
    33: "Ti\u1EC1m n\u0103ng Master \u2014 ph\u1EE5ng s\u1EF1, ch\u1EEFa l\xE0nh \u1EDF quy m\xF4 c\u1ED9ng \u0111\u1ED3ng. Ph\xF9 h\u1EE3p v\u1EDBi vai tr\xF2 d\u1EABn d\u1EAFt tinh th\u1EA7n, gi\xE1o d\u1EE5c nh\xE2n v\u0103n, ho\u1EB7c c\xF4ng t\xE1c x\xE3 h\u1ED9i s\xE2u r\u1ED9ng."
  };
  var SOUL_URGE_INTERPRETATIONS = {
    1: "Khao kh\xE1t \u0111\u01B0\u1EE3c \u0111\u1ED9c l\u1EADp, t\u1EF1 quy\u1EBFt \u0111\u1ECBnh cu\u1ED9c \u0111\u1EDDi m\xECnh, kh\xF4ng mu\u1ED1n b\u1ECB ai chi ph\u1ED1i.",
    2: "Khao kh\xE1t \u0111\u01B0\u1EE3c y\xEAu th\u01B0\u01A1ng, g\u1EAFn k\u1EBFt, h\xF2a h\u1EE3p trong m\u1ED9t m\u1ED1i quan h\u1EC7 g\u1EA7n g\u0169i.",
    3: "Khao kh\xE1t \u0111\u01B0\u1EE3c th\u1EC3 hi\u1EC7n b\u1EA3n th\xE2n, \u0111\u01B0\u1EE3c nh\xECn nh\u1EADn, \u0111\u01B0\u1EE3c s\u1ED1ng vui v\u1EBB v\xE0 s\xE1ng t\u1EA1o.",
    4: "Khao kh\xE1t s\u1EF1 \u1ED5n \u0111\u1ECBnh, an to\xE0n, m\u1ED9t n\u1EC1n t\u1EA3ng v\u1EEFng ch\u1EAFc \u0111\u1EC3 d\u1EF1a v\xE0o.",
    5: "Khao kh\xE1t t\u1EF1 do, tr\u1EA3i nghi\u1EC7m, kh\xF4ng mu\u1ED1n cu\u1ED9c s\u1ED1ng l\u1EB7p \u0111i l\u1EB7p l\u1EA1i m\u1ED9t khu\xF4n m\u1EABu.",
    6: "Khao kh\xE1t \u0111\u01B0\u1EE3c ch\u0103m s\xF3c v\xE0 \u0111\u01B0\u1EE3c ch\u0103m s\xF3c l\u1EA1i \u2014 m\u1ED9t m\xE1i \u1EA5m, m\u1ED9t c\u1ED9ng \u0111\u1ED3ng g\u1EAFn b\xF3.",
    7: "Khao kh\xE1t hi\u1EC3u b\u1EA3n ch\u1EA5t s\xE2u xa c\u1EE7a s\u1EF1 vi\u1EC7c, t\xECm ki\u1EBFm \xFD ngh\u0129a v\xE0 s\u1EF1 th\u1EADt n\u1ED9i t\xE2m.",
    8: "Khao kh\xE1t th\xE0nh c\xF4ng \u0111\u01B0\u1EE3c c\xF4ng nh\u1EADn r\xF5 r\xE0ng \u2014 v\u1EC1 \u0111\u1ECBa v\u1ECB, t\xE0i ch\xEDnh, ho\u1EB7c \u1EA3nh h\u01B0\u1EDFng.",
    9: "Khao kh\xE1t \u0111\u01B0\u1EE3c c\u1ED1ng hi\u1EBFn cho \u0111i\u1EC1u g\xEC \u0111\xF3 l\u1EDBn h\u01A1n b\u1EA3n th\xE2n, \u0111\u1EC3 l\u1EA1i d\u1EA5u \u1EA5n c\xF3 \xFD ngh\u0129a.",
    11: "Khao kh\xE1t Master \u2014 k\u1EBFt n\u1ED1i v\u1EDBi \u0111i\u1EC1u g\xEC \u0111\xF3 v\u01B0\u1EE3t tr\xEAn v\u1EADt ch\u1EA5t, t\xECm ki\u1EBFm \xFD ngh\u0129a t\xE2m linh/tr\u1EF1c gi\xE1c s\xE2u s\u1EAFc.",
    22: "Khao kh\xE1t Master \u2014 th\u1EA5y t\u1EA7m nh\xECn l\u1EDBn c\u1EE7a m\xECnh tr\u1EDF th\xE0nh hi\u1EC7n th\u1EF1c c\u1EE5 th\u1EC3, c\xF3 \xEDch cho nhi\u1EC1u ng\u01B0\u1EDDi.",
    33: "Khao kh\xE1t Master \u2014 \u0111\u01B0\u1EE3c y\xEAu th\u01B0\u01A1ng v\xE0 ph\u1EE5ng s\u1EF1 v\xF4 \u0111i\u1EC1u ki\u1EC7n, c\u1EA3m th\u1EA5y \xFD ngh\u0129a qua vi\u1EC7c ch\u1EEFa l\xE0nh cho ng\u01B0\u1EDDi kh\xE1c."
  };
  var SOUL_URGE_NULL_TEXT = "T\xEAn n\xE0y kh\xF4ng c\xF3 nguy\xEAn \xE2m (A, E, I, O, U) theo quy \u01B0\u1EDBc Version 1, n\xEAn kh\xF4ng \u0111\u1EE7 d\u1EEF li\u1EC7u \u0111\u1EC3 t\xEDnh S\u1ED1 linh h\u1ED3n.";
  var PERSONALITY_INTERPRETATIONS = {
    1: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng t\u1EF1 tin, \u0111\u1ED9c l\u1EADp, c\xF3 ch\u1EE7 ki\u1EBFn r\xF5 r\xE0ng ngay t\u1EEB l\u1EA7n g\u1EB7p \u0111\u1EA7u.",
    2: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng nh\u1EB9 nh\xE0ng, d\u1EC5 g\u1EA7n, khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c c\u1EA3m th\u1EA5y an to\xE0n khi tr\xF2 chuy\u1EC7n.",
    3: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng vui v\u1EBB, c\u1EDFi m\u1EDF, thu h\xFAt s\u1EF1 ch\xFA \xFD m\u1ED9t c\xE1ch t\u1EF1 nhi\xEAn.",
    4: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng nghi\xEAm t\xFAc, \u0111\xE1ng tin c\u1EADy, c\xF3 ph\u1EA7n k\xEDn \u0111\xE1o, th\u1EF1c t\u1EBF.",
    5: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng n\u0103ng \u0111\u1ED9ng, ph\xF3ng kho\xE1ng, \u0111\xF4i khi h\u01A1i kh\xF3 \u0111o\xE1n.",
    6: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng \u1EA5m \xE1p, chu \u0111\xE1o, khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c mu\u1ED1n tin t\u01B0\u1EDFng chia s\u1EBB.",
    7: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng tr\u1EA7m t\u0129nh, h\u01A1i b\xED \u1EA9n, khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c t\xF2 m\xF2 nh\u01B0ng c\u0169ng d\xE8 d\u1EB7t ti\u1EBFp c\u1EADn.",
    8: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng m\u1EA1nh m\u1EBD, uy quy\u1EC1n, c\xF3 s\u1EE9c n\u1EB7ng ngay t\u1EEB d\xE1ng v\u1EBB b\xEAn ngo\xE0i.",
    9: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng bao dung, c\xF3 chi\u1EC1u s\xE2u, khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c c\u1EA3m th\u1EA5y \u0111\u01B0\u1EE3c th\u1EA5u hi\u1EC3u.",
    11: 'T\u1EA1o \u1EA5n t\u01B0\u1EE3ng Master \u2014 c\xF3 s\u1EE9c h\xFAt \u0111\u1EB7c bi\u1EC7t, khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c c\u1EA3m nh\u1EADn \u0111\u01B0\u1EE3c \u0111i\u1EC1u g\xEC \u0111\xF3 "kh\xE1c th\u01B0\u1EDDng" d\xF9 kh\xF3 g\u1ECDi t\xEAn.',
    22: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng Master \u2014 v\u1EEBa \u0111\xE1ng tin c\u1EADy v\u1EEBa c\xF3 t\u1EA7m nh\xECn, khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c s\u1EB5n s\xE0ng \u0111i theo.",
    33: "T\u1EA1o \u1EA5n t\u01B0\u1EE3ng Master \u2014 \u1EA5m \xE1p v\xE0 bao dung \u1EDF m\u1EE9c khi\u1EBFn ng\u01B0\u1EDDi l\u1EA1 c\u0169ng c\u1EA3m th\u1EA5y \u0111\u01B0\u1EE3c quan t\xE2m th\u1EADt l\xF2ng."
  };
  var PERSONALITY_NULL_TEXT = "T\xEAn n\xE0y kh\xF4ng c\xF3 ph\u1EE5 \xE2m, n\xEAn kh\xF4ng \u0111\u1EE7 d\u1EEF li\u1EC7u \u0111\u1EC3 t\xEDnh S\u1ED1 nh\xE2n c\xE1ch.";
  var BIRTHDAY_INTERPRETATIONS = {
    1: "C\xF3 kh\u1EA3 n\u0103ng kh\u1EDFi x\u01B0\u1EDBng, ch\u1EE7 \u0111\u1ED9ng b\u1EAFt \u0111\u1EA7u vi\u1EC7c m\u1EDBi.",
    2: "Nh\u1EA1y b\xE9n trong vi\u1EC7c k\u1EBFt n\u1ED1i v\xE0 c\xE2n b\u1EB1ng c\xE1c m\u1ED1i quan h\u1EC7.",
    3: "C\xF3 n\u0103ng khi\u1EBFu giao ti\u1EBFp, bi\u1EC3u \u0111\u1EA1t t\u1EF1 nhi\xEAn.",
    4: "L\xE0m vi\u1EC7c c\xF3 t\u1ED5 ch\u1EE9c, ch\xFA tr\u1ECDng chi ti\u1EBFt.",
    5: "Th\xEDch nghi nhanh v\u1EDBi thay \u0111\u1ED5i, kh\xF4ng ng\u1EA1i c\xE1i m\u1EDBi.",
    6: "C\xF3 tr\xE1ch nhi\u1EC7m r\xF5 r\u1EC7t v\u1EDBi ng\u01B0\u1EDDi xung quanh.",
    7: "C\xF3 xu h\u01B0\u1EDBng quan s\xE1t, ph\xE2n t\xEDch tr\u01B0\u1EDBc khi h\xE0nh \u0111\u1ED9ng.",
    8: "C\xF3 t\u01B0 duy th\u1EF1c t\u1EBF v\u1EC1 qu\u1EA3n l\xFD ngu\u1ED3n l\u1EF1c, ti\u1EC1n b\u1EA1c.",
    9: "C\xF3 s\u1EF1 \u0111\u1ED3ng c\u1EA3m, d\u1EC5 \u0111\u1EB7t m\xECnh v\xE0o v\u1ECB tr\xED ng\u01B0\u1EDDi kh\xE1c.",
    11: 'T\xE0i n\u0103ng Master v\u1EC1 tr\u1EF1c gi\xE1c \u2014 th\u01B0\u1EDDng "linh c\u1EA3m" \u0111\xFAng tr\u01B0\u1EDBc khi c\xF3 \u0111\u1EE7 d\u1EEF ki\u1EC7n.',
    22: "T\xE0i n\u0103ng Master v\u1EC1 hi\u1EC7n th\u1EF1c h\xF3a k\u1EBF ho\u1EA1ch l\u1EDBn th\xE0nh k\u1EBFt qu\u1EA3 c\u1EE5 th\u1EC3.",
    33: "T\xE0i n\u0103ng Master v\u1EC1 vi\u1EC7c khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c c\u1EA3m th\u1EA5y \u0111\u01B0\u1EE3c quan t\xE2m th\u1EADt s\u1EF1."
  };
  var PERSONAL_YEAR_INTERPRETATIONS = {
    1: "Th\u1EDDi \u0111i\u1EC3m gieo h\u1EA1t cho m\u1ED9t chu k\u1EF3 m\u1EDBi: b\u1EAFt \u0111\u1EA7u d\u1EF1 \xE1n, m\u1ED1i quan h\u1EC7, ho\u1EB7c h\u01B0\u1EDBng \u0111i m\u1EDBi. Ph\xF9 h\u1EE3p \u0111\u1EC3 ch\u1EE7 \u0111\u1ED9ng, kh\xF4ng ph\xF9 h\u1EE3p \u0111\u1EC3 ch\u1EA7n ch\u1EEB.",
    2: "Th\u1EDDi \u0111i\u1EC3m c\u1EA7n ki\xEAn nh\u1EABn, x\xE2y d\u1EF1ng quan h\u1EC7, l\xE0m vi\u1EC7c c\xF9ng ng\u01B0\u1EDDi kh\xE1c thay v\xEC m\u1ED9t m\xECnh. K\u1EBFt qu\u1EA3 th\u01B0\u1EDDng \u0111\u1EBFn ch\u1EADm nh\u01B0ng b\u1EC1n.",
    3: "Th\u1EDDi \u0111i\u1EC3m thu\u1EADn l\u1EE3i \u0111\u1EC3 s\xE1ng t\u1EA1o, giao ti\u1EBFp, m\u1EDF r\u1ED9ng m\u1ED1i quan h\u1EC7 x\xE3 h\u1ED9i v\xE0 t\u1EADn h\u01B0\u1EDFng cu\u1ED9c s\u1ED1ng nhi\u1EC1u h\u01A1n.",
    4: 'Th\u1EDDi \u0111i\u1EC3m c\u1EA7n l\xE0m vi\u1EC7c ch\u0103m ch\u1EC9, x\xE2y n\u1EC1n t\u1EA3ng, x\u1EED l\xFD nh\u1EEFng vi\u1EC7c "kh\xF4 khan" nh\u01B0ng c\u1EA7n thi\u1EBFt (t\xE0i ch\xEDnh, s\u1EE9c kh\u1ECFe, gi\u1EA5y t\u1EDD).',
    5: "Th\u1EDDi \u0111i\u1EC3m nhi\u1EC1u thay \u0111\u1ED5i b\u1EA5t ng\u1EDD, c\u01A1 h\u1ED9i m\u1EDBi xu\u1EA5t hi\u1EC7n nhanh. C\u1EA7n linh ho\u1EA1t, tr\xE1nh b\xE1m ch\u1EA5p v\xE0o k\u1EBF ho\u1EA1ch c\u0169.",
    6: "Th\u1EDDi \u0111i\u1EC3m c\xE1c v\u1EA5n \u0111\u1EC1 gia \u0111\xECnh, quan h\u1EC7 g\u1EA7n g\u0169i c\u1EA7n \u0111\u01B0\u1EE3c \u01B0u ti\xEAn. C\xF3 th\u1EC3 l\xE0 n\u0103m k\u1EBFt h\xF4n, sinh con, ho\u1EB7c ch\u0103m s\xF3c ng\u01B0\u1EDDi th\xE2n.",
    7: "Th\u1EDDi \u0111i\u1EC3m ph\xF9 h\u1EE3p \u0111\u1EC3 t\u1EA1m ch\u1EADm l\u1EA1i, h\u1ECDc h\u1ECFi, suy ng\u1EABm n\u1ED9i t\xE2m h\u01A1n l\xE0 m\u1EDF r\u1ED9ng ra b\xEAn ngo\xE0i.",
    8: "Th\u1EDDi \u0111i\u1EC3m th\xE0nh qu\u1EA3 t\xE0i ch\xEDnh/s\u1EF1 nghi\u1EC7p c\u1EE7a c\xE1c n\u0103m tr\u01B0\u1EDBc b\u1EAFt \u0111\u1EA7u r\xF5 n\xE9t. C\u0169ng l\xE0 n\u0103m c\u1EA7n quy\u1EBFt \u0111o\xE1n trong c\xF4ng vi\u1EC7c.",
    9: "Th\u1EDDi \u0111i\u1EC3m k\u1EBFt th\xFAc m\u1ED9t chu k\u1EF3 9 n\u0103m: bu\xF4ng b\u1ECF \u0111i\u1EC1u kh\xF4ng c\xF2n ph\xF9 h\u1EE3p \u0111\u1EC3 chu\u1EA9n b\u1ECB cho kh\u1EDFi \u0111\u1EA7u m\u1EDBi (n\u0103m 1 k\u1EBF ti\u1EBFp)."
  };
  var PERSONAL_MONTH_INTERPRETATIONS = {
    1: "Th\xE1ng kh\u1EDFi \u0111\u1ED9ng \u2014 th\xEDch h\u1EE3p b\u1EAFt \u0111\u1EA7u vi\u1EC7c m\u1EDBi trong th\xE1ng n\xE0y.",
    2: "Th\xE1ng l\u1EAFng nghe \u2014 th\xEDch h\u1EE3p trao \u0111\u1ED5i, tho\u1EA3 thu\u1EADn, l\xE0m vi\u1EC7c nh\xF3m.",
    3: "Th\xE1ng k\u1EBFt n\u1ED1i \u2014 th\xEDch h\u1EE3p giao ti\u1EBFp x\xE3 h\u1ED9i, th\u1EC3 hi\u1EC7n \xFD t\u01B0\u1EDFng.",
    4: "Th\xE1ng t\u1EADp trung \u2014 th\xEDch h\u1EE3p x\u1EED l\xFD c\xF4ng vi\u1EC7c chi ti\u1EBFt, t\u1ED3n \u0111\u1ECDng.",
    5: "Th\xE1ng linh ho\u1EA1t \u2014 d\u1EC5 c\xF3 thay \u0111\u1ED5i b\u1EA5t ng\u1EDD, n\xEAn gi\u1EEF t\xE2m th\u1EBF m\u1EDF.",
    6: "Th\xE1ng quan t\xE2m \u2014 \u01B0u ti\xEAn gia \u0111\xECnh, c\xE1c m\u1ED1i quan h\u1EC7 g\u1EA7n g\u0169i.",
    7: "Th\xE1ng ch\u1EADm l\u1EA1i \u2014 th\xEDch h\u1EE3p ngh\u1EC9 ng\u01A1i, suy ng\u1EABm h\u01A1n l\xE0 b\u1EE9t t\u1ED1c.",
    8: "Th\xE1ng h\xE0nh \u0111\u1ED9ng \u2014 th\xEDch h\u1EE3p th\xFAc \u0111\u1EA9y c\xF4ng vi\u1EC7c, t\xE0i ch\xEDnh.",
    9: "Th\xE1ng ho\xE0n t\u1EA5t \u2014 th\xEDch h\u1EE3p k\u1EBFt th\xFAc vi\u1EC7c dang d\u1EDF, d\u1ECDn \u0111\u01B0\u1EDDng cho th\xE1ng m\u1EDBi."
  };
  var PERSONAL_DAY_INTERPRETATIONS = {
    1: "Ng\xE0y t\u1ED1t \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u vi\u1EC7c g\xEC \u0111\xF3 m\u1EDBi, d\xF9 nh\u1ECF.",
    2: "Ng\xE0y t\u1ED1t \u0111\u1EC3 tr\xF2 chuy\u1EC7n, l\u1EAFng nghe, gi\u1EA3i quy\u1EBFt hi\u1EC3u l\u1EA7m.",
    3: "Ng\xE0y t\u1ED1t \u0111\u1EC3 s\xE1ng t\u1EA1o, k\u1EBFt n\u1ED1i x\xE3 h\u1ED9i.",
    4: "Ng\xE0y t\u1ED1t \u0111\u1EC3 l\xE0m vi\u1EC7c c\xF3 k\u1EBF ho\u1EA1ch, x\u1EED l\xFD chi ti\u1EBFt.",
    5: "Ng\xE0y d\u1EC5 c\xF3 thay \u0111\u1ED5i b\u1EA5t ng\u1EDD \u2014 n\xEAn linh ho\u1EA1t.",
    6: "Ng\xE0y t\u1ED1t \u0111\u1EC3 quan t\xE2m gia \u0111\xECnh, ng\u01B0\u1EDDi th\xE2n.",
    7: "Ng\xE0y t\u1ED1t \u0111\u1EC3 ngh\u1EC9 ng\u01A1i, suy ngh\u0129 m\u1ED9t m\xECnh.",
    8: "Ng\xE0y t\u1ED1t \u0111\u1EC3 ra quy\u1EBFt \u0111\u1ECBnh quan tr\u1ECDng, x\u1EED l\xFD t\xE0i ch\xEDnh.",
    9: "Ng\xE0y t\u1ED1t \u0111\u1EC3 ho\xE0n t\u1EA5t, bu\xF4ng b\u1ECF \u0111i\u1EC1u kh\xF4ng c\u1EA7n thi\u1EBFt."
  };

  // src/lib/numerology/interpret.ts
  function isSingleDigit(n) {
    return n >= 1 && n <= 9;
  }
  function interpretLifePath(number) {
    return LIFE_PATH_INTERPRETATIONS[number];
  }
  function interpretExpression(number) {
    return EXPRESSION_INTERPRETATIONS[number];
  }
  function interpretSoulUrge(number) {
    return number === null ? SOUL_URGE_NULL_TEXT : SOUL_URGE_INTERPRETATIONS[number];
  }
  function interpretPersonality(number) {
    return number === null ? PERSONALITY_NULL_TEXT : PERSONALITY_INTERPRETATIONS[number];
  }
  function interpretBirthday(number) {
    return BIRTHDAY_INTERPRETATIONS[number];
  }
  var MASTER_INTENSITY_NOTE = "\u0110\xE2y l\xE0 n\u0103ng l\u01B0\u1EE3ng Master, c\u01B0\u1EDDng \u0111\u1ED9 cao h\u01A1n b\xECnh th\u01B0\u1EDDng trong giai \u0111o\u1EA1n n\xE0y: ";
  function interpretPersonalYear(number) {
    return isSingleDigit(number) ? PERSONAL_YEAR_INTERPRETATIONS[number] : MASTER_INTENSITY_NOTE + LIFE_PATH_INTERPRETATIONS[number];
  }
  function interpretPersonalMonth(number) {
    return isSingleDigit(number) ? PERSONAL_MONTH_INTERPRETATIONS[number] : MASTER_INTENSITY_NOTE + LIFE_PATH_INTERPRETATIONS[number];
  }
  function interpretPersonalDay(number) {
    return isSingleDigit(number) ? PERSONAL_DAY_INTERPRETATIONS[number] : MASTER_INTENSITY_NOTE + LIFE_PATH_INTERPRETATIONS[number];
  }

  // src/lib/numerology/life-path-detail.ts
  var LIFE_PATH_DETAIL = {
    1: {
      overview: "S\u1ED1 1 mang n\u0103ng l\u01B0\u1EE3ng kh\u1EDFi \u0111\u1EA7u v\xE0 l\xE3nh \u0111\u1EA1o. B\u1EA1n c\xF3 xu h\u01B0\u1EDBng t\u1EF1 m\xECnh quy\u1EBFt \u0111\u1ECBnh, kh\xF4ng ng\u1EA1i \u0111i \u0111\u1EA7u v\xE0 kh\xF4ng th\xEDch ch\u1EDD ng\u01B0\u1EDDi kh\xE1c d\u1EABn \u0111\u01B0\u1EDDng. B\xE0i h\u1ECDc l\u1EDBn nh\u1EA5t trong \u0111\u1EDDi l\xE0 h\u1ECDc c\xE1ch \u0111\u1EE9ng v\u1EEFng m\u1ED9t m\xECnh m\xE0 kh\xF4ng tr\u1EDF n\xEAn b\u1EA3o th\u1EE7 hay c\xF4 l\u1EADp.",
      strengths: "S\xE1ng t\u1EA1o, quy\u1EBFt \u0111o\xE1n, c\xF3 kh\u1EA3 n\u0103ng kh\u1EDFi x\u01B0\u1EDBng nh\u1EEFng vi\u1EC7c ng\u01B0\u1EDDi kh\xE1c c\xF2n e ng\u1EA1i. B\u1EA1n h\xE0nh \u0111\u1ED9ng nhanh v\xE0 kh\xF4ng s\u1EE3 ch\u1ECBu tr\xE1ch nhi\u1EC7m cho l\u1EF1a ch\u1ECDn c\u1EE7a m\xECnh.",
      challenges: "D\u1EC5 n\xF3ng v\u1ED9i, kh\xF3 chia s\u1EBB quy\u1EC1n ki\u1EC3m so\xE1t. Khi l\xE0m vi\u1EC7c nh\xF3m, b\u1EA1n c\xF3 th\u1EC3 v\xF4 t\xECnh l\u1EA5n quy\u1EC1n quy\u1EBFt \u0111\u1ECBnh c\u1EE7a ng\u01B0\u1EDDi kh\xE1c v\xEC tin t\u01B0\u1EDFng b\u1EA3n th\xE2n h\u01A1n.",
      career: "Ph\xF9 h\u1EE3p vai tr\xF2 l\xE3nh \u0111\u1EA1o, kh\u1EDFi nghi\u1EC7p, ho\u1EB7c l\xE0m vi\u1EC7c \u0111\u1ED9c l\u1EADp v\u1EDBi \xEDt gi\xE1m s\xE1t. B\u1EA1n ph\xE1t huy t\u1ED1t nh\u1EA5t khi \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1EB7t h\u01B0\u1EDBng \u0111i, v\xE0 d\u1EC5 b\u1EE9c b\u1ED1i trong m\xF4i tr\u01B0\u1EDDng nhi\u1EC1u quy tr\xECnh c\u1EE9ng nh\u1EAFc.",
      relationships: "C\u1EA7n m\u1ED9t \u0111\u1ED1i t\xE1c t\xF4n tr\u1ECDng kh\xF4ng gian ri\xEAng v\xE0 quy\u1EC1n t\u1EF1 quy\u1EBFt c\u1EE7a b\u1EA1n. D\u1EC5 va ch\u1EA1m n\u1EBFu c\u1EA3 hai \u0111\u1EC1u m\u1EA1nh m\u1EBD v\xE0 \u0111\u1EC1u mu\u1ED1n l\xE0 ng\u01B0\u1EDDi quy\u1EBFt \u0111\u1ECBnh cu\u1ED1i c\xF9ng.",
      communication: "N\xF3i th\u1EB3ng, ng\u1EAFn g\u1ECDn, \u0111i th\u1EB3ng v\xE0o v\u1EA5n \u0111\u1EC1. \u0110\xF4i khi c\xE1ch n\xF3i d\u1EE9t kho\xE1t c\u1EE7a b\u1EA1n khi\u1EBFn ng\u01B0\u1EDDi kh\xE1c c\u1EA3m th\u1EA5y nh\u01B0 \u0111ang b\u1ECB ra l\u1EC7nh, d\xF9 b\u1EA1n kh\xF4ng c\xF3 \xFD \u0111\xF3.",
      growth: "H\u1ECDc l\u1EAFng nghe tr\u01B0\u1EDBc khi quy\u1EBFt \u0111\u1ECBnh. T\u1EADp chia s\u1EBB quy\u1EC1n ki\u1EC3m so\xE1t v\u1EDBi ng\u01B0\u1EDDi m\xECnh tin t\u01B0\u1EDFng, bi\u1EBFn s\u1EF1 \u0111\u1ED9c l\u1EADp th\xE0nh h\u1EE3p t\xE1c c\xF3 ch\u1ECDn l\u1ECDc thay v\xEC lu\xF4n ph\u1EA3i t\u1EF1 l\xE0m m\u1ED9t m\xECnh."
    },
    2: {
      overview: "S\u1ED1 2 nh\u1EA1y c\u1EA3m, tinh t\u1EBF v\xE0 gi\u1ECFi l\u1EAFng nghe. B\u1EA1n ph\xE1t tri\u1EC3n t\u1ED1t nh\u1EA5t trong m\xF4i tr\u01B0\u1EDDng h\u1EE3p t\xE1c, n\u01A1i m\u1ED1i quan h\u1EC7 v\xE0 s\u1EF1 h\xE0i h\xF2a \u0111\u01B0\u1EE3c coi tr\u1ECDng h\u01A1n l\xE0 tranh \u0111\u1EA5u \u0111\u1EC3 n\u1ED5i b\u1EADt.",
      strengths: "Ki\xEAn nh\u1EABn, kh\xE9o ngo\u1EA1i giao, \u0111\u1ED3ng c\u1EA3m s\xE2u s\u1EAFc. B\u1EA1n gi\u1ECFi l\xE0m c\u1EA7u n\u1ED1i gi\u1EEFa nh\u1EEFng ng\u01B0\u1EDDi ho\u1EB7c nh\u1EEFng \xFD ki\u1EBFn kh\xE1c bi\u1EC7t.",
      challenges: "D\u1EC5 ph\u1EE5 thu\u1ED9c c\u1EA3m x\xFAc v\xE0o ng\u01B0\u1EDDi kh\xE1c, ng\u1EA1i xung \u0111\u1ED9t \u0111\u1EBFn m\u1EE9c im l\u1EB7ng ch\u1ECBu \u0111\u1EF1ng thay v\xEC n\xF3i ra \u0111i\u1EC1u m\xECnh th\u1EF1c s\u1EF1 mu\u1ED1n.",
      career: "H\u1EE3p vai tr\xF2 h\u1ED7 tr\u1EE3, \u0111i\u1EC1u ph\u1ED1i, t\u01B0 v\u1EA5n \u2014 n\u01A1i l\xE0m vi\u1EC7c nh\xF3m \u0111\u01B0\u1EE3c \u0111\u1EC1 cao. B\u1EA1n l\xE0m t\u1ED1t h\u01A1n khi c\xF3 \u0111\u1ED3ng \u0111\u1ED9i, v\xE0 d\u1EC5 m\u1EA5t \u0111\u1ED9ng l\u1EF1c khi ph\u1EA3i m\u1ED9t m\xECnh x\u1EED l\xFD m\u1ECDi th\u1EE9.",
      relationships: "G\u1EAFn b\xF3, quan t\xE2m \u0111\u1EBFn t\u1EEBng chi ti\u1EBFt nh\u1ECF c\u1EE7a ng\u01B0\u1EDDi m\xECnh y\xEAu th\u01B0\u01A1ng. Nh\u01B0ng c\u0169ng d\u1EC5 qu\xEAn m\u1EA5t nhu c\u1EA7u c\u1EE7a ch\xEDnh m\xECnh \u0111\u1EC3 gi\u1EEF h\xF2a kh\xED chung.",
      communication: "M\u1EC1m m\u1ECFng, kh\xE9o l\xE9o, l\u1EAFng nghe t\u1ED1t h\u01A1n l\xE0 n\xF3i nhi\u1EC1u. C\xF3 xu h\u01B0\u1EDBng tr\xE1nh n\xF3i th\u1EB3ng \u0111i\u1EC1u kh\xF4ng h\xE0i l\xF2ng v\xEC s\u1EE3 l\xE0m t\u1ED5n th\u01B0\u01A1ng ho\u1EB7c g\xE2y xung \u0111\u1ED9t.",
      growth: "H\u1ECDc c\xE1ch n\xF3i ra nhu c\u1EA7u c\u1EE7a b\u1EA3n th\xE2n m\u1ED9t c\xE1ch r\xF5 r\xE0ng. \u0110\u1EB7t ranh gi\u1EDBi l\xE0nh m\u1EA1nh, v\xE0 ph\xE2n bi\u1EC7t gi\u1EEFa h\u1EE3p t\xE1c th\u1EADt s\u1EF1 v\u1EDBi vi\u1EC7c ch\u1EC9 \u0111ang ch\u1ECBu \u0111\u1EF1ng \u0111\u1EC3 tr\xE1nh m\xE2u thu\u1EABn."
    },
    3: {
      overview: "S\u1ED1 3 gi\xE0u c\u1EA3m x\xFAc v\xE0 c\xF3 khi\u1EBFu bi\u1EC3u \u0111\u1EA1t \u2014 qua l\u1EDDi n\xF3i, ch\u1EEF vi\u1EBFt hay ngh\u1EC7 thu\u1EADt. B\u1EA1n mang n\u0103ng l\u01B0\u1EE3ng l\u1EA1c quan, d\u1EC5 lan t\u1ECFa s\u1EF1 vui v\u1EBB cho nh\u1EEFng ng\u01B0\u1EDDi xung quanh.",
      strengths: "S\xE1ng t\u1EA1o, h\xE0i h\u01B0\u1EDBc, truy\u1EC1n c\u1EA3m h\u1EE9ng t\u1EF1 nhi\xEAn. B\u1EA1n c\xF3 kh\u1EA3 n\u0103ng l\xE0m cho m\u1ECDi vi\u1EC7c tr\u1EDF n\xEAn sinh \u0111\u1ED9ng v\xE0 d\u1EC5 ti\u1EBFp c\u1EADn h\u01A1n v\u1EDBi ng\u01B0\u1EDDi kh\xE1c.",
      challenges: "D\u1EC5 ph\xE2n t\xE1n, n\xF3i nhi\u1EC1u h\u01A1n l\xE0m. C\xF3 xu h\u01B0\u1EDBng n\xE9 tr\xE1nh c\u1EA3m x\xFAc ti\xEAu c\u1EF1c b\u1EB1ng v\u1EBB vui v\u1EBB b\u1EC1 ngo\xE0i thay v\xEC \u0111\u1ED1i di\u1EC7n th\u1EADt.",
      career: "Ph\xF9 h\u1EE3p l\u0129nh v\u1EF1c s\xE1ng t\u1EA1o, truy\u1EC1n th\xF4ng, ngh\u1EC7 thu\u1EADt, gi\u1EA3ng d\u1EA1y \u2014 n\u01A1i b\u1EA1n \u0111\u01B0\u1EE3c th\u1EC3 hi\u1EC7n b\u1EA3n th\xE2n v\xE0 \xFD t\u01B0\u1EDFng c\u1EE7a m\xECnh. C\u1EA7n m\xF4i tr\u01B0\u1EDDng \u0111\u1EE7 linh ho\u1EA1t \u0111\u1EC3 kh\xF4ng c\u1EA3m th\u1EA5y b\u1ECB b\xF3 bu\u1ED9c.",
      relationships: "Mang n\u0103ng l\u01B0\u1EE3ng t\xEDch c\u1EF1c, vui v\u1EBB cho m\u1ED1i quan h\u1EC7. Nh\u01B0ng c\xF3 th\u1EC3 ng\u1EA1i \u0111\u1ED1i di\u1EC7n nh\u1EEFng m\xE2u thu\u1EABn nghi\xEAm t\xFAc, ch\u1ECDn c\xE1ch pha lo\xE3ng b\u1EB1ng s\u1EF1 h\xE0i h\u01B0\u1EDBc thay v\xEC gi\u1EA3i quy\u1EBFt g\u1ED1c r\u1EC5.",
      communication: "Sinh \u0111\u1ED9ng, cu\u1ED1n h\xFAt, gi\u1ECFi k\u1EC3 chuy\u1EC7n. \u0110\xF4i khi n\xF3i nhi\u1EC1u h\u01A1n l\xE0 th\u1EF1c s\u1EF1 l\u1EAFng nghe, ho\u1EB7c chuy\u1EC3n ch\u1EE7 \u0111\u1EC1 khi c\u1EA3m th\u1EA5y kh\xF4ng tho\u1EA3i m\xE1i.",
      growth: "R\xE8n t\xEDnh ki\xEAn tr\xEC \u0111\u1EC3 theo \u0111u\u1ED5i m\u1ED9t vi\u1EC7c \u0111\u1EBFn c\xF9ng, kh\xF4ng b\u1ECF d\u1EDF khi h\u1EE9ng th\xFA gi\u1EA3m. H\u1ECDc \u0111\u1ED1i di\u1EC7n c\u1EA3m x\xFAc th\u1EADt c\u1EE7a m\xECnh thay v\xEC lu\xF4n che l\u1EA1i b\u1EB1ng s\u1EF1 vui v\u1EBB."
    },
    4: {
      overview: "S\u1ED1 4 th\u1EF1c t\u1EBF, k\u1EF7 lu\u1EADt v\xE0 coi tr\u1ECDng s\u1EF1 \u1ED5n \u0111\u1ECBnh. B\u1EA1n l\xE0 ng\u01B0\u1EDDi \u0111\u1EB7t n\u1EC1n m\xF3ng b\u1EC1n v\u1EEFng cho m\u1ECDi k\u1EBF ho\u1EA1ch d\xE0i h\u1EA1n, l\xE0m vi\u1EC7c c\xF3 h\u1EC7 th\u1ED1ng h\u01A1n l\xE0 ng\u1EABu h\u1EE9ng.",
      strengths: "\u0110\xE1ng tin c\u1EADy, ki\xEAn tr\xEC, c\xF3 t\u1ED5 ch\u1EE9c. B\u1EA1n ho\xE0n th\xE0nh vi\u1EC7c \u0111\xE3 nh\u1EADn m\u1ED9t c\xE1ch ch\u1EAFc ch\u1EAFn, \xEDt khi b\u1ECF ngang gi\u1EEFa \u0111\u01B0\u1EDDng.",
      challenges: "C\u1EE9ng nh\u1EAFc, ng\u1EA1i thay \u0111\u1ED5i k\u1EBF ho\u1EA1ch \u0111\xE3 \u0111\u1ECBnh. D\u1EC5 l\xE0m vi\u1EC7c qu\xE1 s\u1EE9c v\xEC c\u1EA3m gi\xE1c tr\xE1ch nhi\u1EC7m, qu\xEAn ngh\u1EC9 ng\u01A1i cho b\u1EA3n th\xE2n.",
      career: "H\u1EE3p vai tr\xF2 qu\u1EA3n l\xFD v\u1EADn h\xE0nh, k\u1EF9 thu\u1EADt, t\xE0i ch\xEDnh \u2014 n\u01A1i c\u1EA7n quy tr\xECnh r\xF5 r\xE0ng v\xE0 \u0111\u1ED9 ch\xEDnh x\xE1c cao. B\u1EA1n ph\xE1t huy t\u1ED1t nh\u1EA5t khi c\xF3 c\u1EA5u tr\xFAc \u0111\u1EC3 l\xE0m vi\u1EC7c theo.",
      relationships: "\u0110\xE1ng tin, \u1ED5n \u0111\u1ECBnh, l\xE0 \u0111i\u1EC3m t\u1EF1a cho ng\u01B0\u1EDDi xung quanh. Nh\u01B0ng c\xF3 th\u1EC3 tr\u1EDF n\xEAn c\u1EE9ng nh\u1EAFc khi \u0111\u1ED1i ph\u01B0\u01A1ng mu\u1ED1n thay \u0111\u1ED5i k\u1EBF ho\u1EA1ch gi\u1EEFa ch\u1EEBng.",
      communication: "R\xF5 r\xE0ng, th\u1EF1c t\u1EBF, \u0111i theo logic. \xCDt th\u1EC3 hi\u1EC7n c\u1EA3m x\xFAc ra ngo\xE0i, n\xEAn \u0111\xF4i khi b\u1ECB hi\u1EC3u nh\u1EA7m l\xE0 kh\xF4 khan ho\u1EB7c l\u1EA1nh l\xF9ng.",
      growth: "H\u1ECDc linh ho\u1EA1t h\u01A1n v\u1EDBi nh\u1EEFng thay \u0111\u1ED5i ngo\xE0i k\u1EBF ho\u1EA1ch. Cho ph\xE9p b\u1EA3n th\xE2n ngh\u1EC9 ng\u01A1i m\xE0 kh\xF4ng c\u1EA3m th\u1EA5y t\u1ED9i l\u1ED7i, thay v\xEC lu\xF4n g\u1EAFn gi\xE1 tr\u1ECB b\u1EA3n th\xE2n v\u1EDBi n\u0103ng su\u1EA5t l\xE0m vi\u1EC7c."
    },
    5: {
      overview: "S\u1ED1 5 ham thay \u0111\u1ED5i, th\xEDch tr\u1EA3i nghi\u1EC7m m\u1EDBi v\xE0 kh\xF4ng ch\u1ECBu \u0111\u01B0\u1EE3c s\u1EF1 g\xF2 b\xF3 l\u1EB7p l\u1EA1i. B\u1EA1n h\u1ECDc \u0111\u01B0\u1EE3c nhi\u1EC1u nh\u1EA5t qua va ch\u1EA1m th\u1EF1c t\u1EBF h\u01A1n l\xE0 qua l\xFD thuy\u1EBFt hay khu\xF4n m\u1EABu c\xF3 s\u1EB5n.",
      strengths: "Linh ho\u1EA1t, th\xEDch nghi nhanh v\u1EDBi m\xF4i tr\u01B0\u1EDDng m\u1EDBi. B\u1EA1n kh\xF4ng ng\u1EA1i th\u1EED nh\u1EEFng h\u01B0\u1EDBng \u0111i m\xE0 ng\u01B0\u1EDDi kh\xE1c th\u1EA5y r\u1EE7i ro.",
      challenges: "Thi\u1EBFu ki\xEAn \u0111\u1ECBnh, d\u1EC5 b\u1ECF d\u1EDF gi\u1EEFa ch\u1EEBng khi s\u1EF1 m\u1EDBi m\u1EBB gi\u1EA3m \u0111i. Ng\u1EA1i c\u1EA3m gi\xE1c b\u1ECB r\xE0ng bu\u1ED9c l\xE2u d\xE0i v\xE0o m\u1ED9t \u0111i\u1EC1u g\xEC \u0111\xF3.",
      career: "H\u1EE3p m\xF4i tr\u01B0\u1EDDng \u0111a d\u1EA1ng, \xEDt l\u1EB7p l\u1EA1i, c\xF3 y\u1EBFu t\u1ED1 di chuy\u1EC3n ho\u1EB7c kh\xE1m ph\xE1. B\u1EA1n l\xE0m t\u1ED1t h\u01A1n khi \u0111\u01B0\u1EE3c x\u1EED l\xFD nhi\u1EC1u vi\u1EC7c kh\xE1c nhau h\u01A1n l\xE0 m\u1ED9t vi\u1EC7c c\u1ED1 \u0111\u1ECBnh trong th\u1EDDi gian d\xE0i.",
      relationships: "Mang n\u0103ng l\u01B0\u1EE3ng m\u1EDBi m\u1EBB, h\u1EA5p d\u1EABn cho m\u1ED1i quan h\u1EC7. Nh\u01B0ng d\u1EC5 kh\xF3 ch\u1ECBu v\u1EDBi c\u1EA3m gi\xE1c b\u1ECB ki\u1EC3m so\xE1t ho\u1EB7c b\u1ECB b\u1EAFt l\u1EB7p l\u1EA1i c\xF9ng m\u1ED9t n\u1EBFp s\u1ED1ng.",
      communication: "C\u1EDFi m\u1EDF, d\xED d\u1ECFm, th\xEDch n\xF3i v\u1EC1 \xFD t\u01B0\u1EDFng v\xE0 tr\u1EA3i nghi\u1EC7m m\u1EDBi. C\xF3 th\u1EC3 l\u01B0\u1EDBt nhanh qua nh\u1EEFng chi ti\u1EBFt c\u1EA3m x\xFAc s\xE2u \u0111\u1EC3 chuy\u1EC3n sang ch\u1EE7 \u0111\u1EC1 kh\xE1c.",
      growth: "H\u1ECDc ho\xE0n th\xE0nh vi\u1EC7c \u0111\xE3 b\u1EAFt \u0111\u1EA7u tr\u01B0\u1EDBc khi chuy\u1EC3n sang c\xE1i m\u1EDBi. T\xECm s\u1EF1 t\u1EF1 do b\xEAn trong m\u1ED9t khu\xF4n kh\u1ED5 c\xF3 ch\u1ECDn l\u1ECDc, thay v\xEC lu\xF4n ph\u1EA3i r\u1EDDi b\u1ECF m\u1ECDi r\xE0ng bu\u1ED9c \u0111\u1EC3 c\u1EA3m th\u1EA5y t\u1EF1 do."
    },
    6: {
      overview: "S\u1ED1 6 c\xF3 tr\xE1ch nhi\u1EC7m cao v\u1EDBi gia \u0111\xECnh v\xE0 c\u1ED9ng \u0111\u1ED3ng, \u0111\u1EB7t n\u1EB7ng s\u1EF1 h\xE0i h\xF2a v\xE0 c\xF4ng b\u1EB1ng trong c\xE1c m\u1ED1i quan h\u1EC7 xung quanh m\xECnh.",
      strengths: "T\u1EADn t\xE2m, \u0111\xE1ng tin, lu\xF4n s\u1EB5n s\xE0ng g\xE1nh v\xE1c khi ng\u01B0\u1EDDi kh\xE1c c\u1EA7n. B\u1EA1n l\xE0 ng\u01B0\u1EDDi gi\u1EEF m\u1ECDi th\u1EE9 trong nh\xE0/nh\xF3m \u0111i v\xE0o \u1ED5n \u0111\u1ECBnh.",
      challenges: "D\u1EC5 \xF4m \u0111\u1ED3m tr\xE1ch nhi\u1EC7m c\u1EE7a ng\u01B0\u1EDDi kh\xE1c. C\xF3 xu h\u01B0\u1EDBng hy sinh nhu c\u1EA7u b\u1EA3n th\xE2n qu\xE1 m\u1EE9c \u0111\u1EC3 lo cho ng\u01B0\u1EDDi xung quanh.",
      career: "H\u1EE3p vai tr\xF2 ch\u0103m s\xF3c, gi\xE1o d\u1EE5c, y t\u1EBF, ho\u1EB7c qu\u1EA3n l\xFD gia \u0111\xECnh/c\u1ED9ng \u0111\u1ED3ng \u2014 n\u01A1i gi\xE1 tr\u1ECB \u0111\xF3ng g\xF3p c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c nh\xECn th\u1EA5y r\xF5 r\xE0ng.",
      relationships: "G\u1EAFn b\xF3, chu \u0111\xE1o, th\u01B0\u1EDDng l\xE0 ng\u01B0\u1EDDi gi\u1EEF h\xF2a kh\xED trong gia \u0111\xECnh ho\u1EB7c nh\xF3m. Nh\u01B0ng d\u1EC5 tr\u1EDF th\xE0nh ng\u01B0\u1EDDi lu\xF4n ph\u1EA3i nh\u01B0\u1EDDng, lu\xF4n ph\u1EA3i lo cho ng\u01B0\u1EDDi kh\xE1c tr\u01B0\u1EDBc.",
      communication: "\u1EA4m \xE1p, quan t\xE2m, hay h\u1ECFi han. \u0110\xF4i khi thi\xEAn v\u1EC1 khuy\xEAn b\u1EA3o ho\u1EB7c can thi\u1EC7p v\xE0o vi\u1EC7c c\u1EE7a ng\u01B0\u1EDDi kh\xE1c nhi\u1EC1u h\u01A1n m\u1EE9c h\u1ECD c\u1EA7n.",
      growth: "H\u1ECDc ph\xE2n bi\u1EC7t gi\u1EEFa gi\xFAp \u0111\u1EE1 v\xE0 g\xE1nh tr\xE1ch nhi\u1EC7m kh\xF4ng ph\u1EA3i c\u1EE7a m\xECnh. \u0110\u1EB7t nhu c\u1EA7u c\u1EE7a b\u1EA3n th\xE2n song song v\u1EDBi nhu c\u1EA7u c\u1EE7a ng\u01B0\u1EDDi kh\xE1c, kh\xF4ng ph\u1EA3i sau c\xF9ng."
    },
    7: {
      overview: 'S\u1ED1 7 thi\xEAn v\u1EC1 n\u1ED9i t\xE2m, th\xEDch ph\xE2n t\xEDch v\xE0 \u0111\u1EB7t c\xE2u h\u1ECFi "t\u1EA1i sao" thay v\xEC ch\u1EA5p nh\u1EADn m\u1ECDi th\u1EE9 \u1EDF b\u1EC1 m\u1EB7t. B\u1EA1n c\u1EA7n th\u1EDDi gian \u1EDF m\u1ED9t m\xECnh \u0111\u1EC3 n\u1EA1p l\u1EA1i n\u0103ng l\u01B0\u1EE3ng.',
      strengths: "T\u01B0 duy s\xE2u, tr\u1EF1c gi\xE1c t\u1ED1t, kh\u1EA3 n\u0103ng ph\xE2n t\xEDch \u0111\u1ED9c l\u1EADp v\u01B0\u1EE3t tr\u1ED9i. B\u1EA1n nh\xECn ra nh\u1EEFng \u0111i\u1EC1u m\xE0 ng\u01B0\u1EDDi kh\xE1c d\u1EC5 b\u1ECF qua.",
      challenges: "Kh\xE9p k\xEDn, ho\xE0i nghi qu\xE1 m\u1EE9c, kh\xF3 m\u1EDF l\xF2ng tin t\u01B0\u1EDFng ng\u01B0\u1EDDi kh\xE1c cho \u0111\u1EBFn khi ch\u1EAFc ch\u1EAFn.",
      career: "H\u1EE3p nghi\xEAn c\u1EE9u, ph\xE2n t\xEDch, chuy\xEAn m\xF4n s\xE2u \u2014 nh\u1EEFng c\xF4ng vi\u1EC7c c\u1EA7n s\u1EF1 t\u1EADp trung m\u1ED9t m\xECnh h\u01A1n l\xE0 l\xE0m vi\u1EC7c nh\xF3m li\xEAn t\u1EE5c.",
      relationships: "Ch\u1ECDn l\u1ECDc, c\u1EA7n kh\xF4ng gian ri\xEAng. B\u1EA1n g\u1EAFn b\xF3 s\xE2u v\u1EDBi r\u1EA5t \xEDt ng\u01B0\u1EDDi, thay v\xEC r\u1ED9ng v\u1EDBi nhi\u1EC1u ng\u01B0\u1EDDi.",
      communication: "K\xEDn, \xEDt chia s\u1EBB ch\u1EE7 \u0111\u1ED9ng, th\u01B0\u1EDDng quan s\xE1t k\u1EF9 tr\u01B0\u1EDBc khi l\xEAn ti\u1EBFng. C\xF3 th\u1EC3 b\u1ECB hi\u1EC3u l\xE0 xa c\xE1ch ho\u1EB7c kh\xF3 g\u1EA7n d\xF9 kh\xF4ng c\u1ED1 \xFD.",
      growth: "H\u1ECDc chia s\u1EBB c\u1EA3m x\xFAc v\xE0 suy ngh\u0129 ra ngo\xE0i nhi\u1EC1u h\u01A1n. Tin t\u01B0\u1EDFng ng\u01B0\u1EDDi kh\xE1c d\xF9 ch\u01B0a n\u1EAFm h\u1EBFt m\u1ECDi chi ti\u1EBFt, thay v\xEC ch\u1EDD \u0111\u1EBFn khi ho\xE0n to\xE0n ch\u1EAFc ch\u1EAFn m\u1EDBi m\u1EDF l\xF2ng."
    },
    8: {
      overview: "S\u1ED1 8 c\xF3 t\u1EA7m nh\xECn l\u1EDBn v\u1EC1 v\u1EADt ch\u1EA5t, s\u1EF1 nghi\u1EC7p v\xE0 ti\u1EC1n b\u1EA1c. B\u1EA1n gi\u1ECFi t\u1ED5 ch\u1EE9c, qu\u1EA3n l\xFD ngu\u1ED3n l\u1EF1c v\xE0 bi\u1EBFn tham v\u1ECDng th\xE0nh k\u1EBFt qu\u1EA3 c\u1EE5 th\u1EC3.",
      strengths: "Quy\u1EBFt \u0111o\xE1n, tham v\u1ECDng l\xE0nh m\u1EA1nh, kh\u1EA3 n\u0103ng t\u1ED5 ch\u1EE9c v\xE0 \u0111i\u1EC1u ph\u1ED1i ngu\u1ED3n l\u1EF1c r\u1EA5t t\u1ED1t.",
      challenges: "D\u1EC5 \u0111\xE1nh gi\xE1 th\xE0nh c\xF4ng ch\u1EC9 qua v\u1EADt ch\u1EA5t ho\u1EB7c \u0111\u1ECBa v\u1ECB. C\xF3 xu h\u01B0\u1EDBng mu\u1ED1n ki\u1EC3m so\xE1t ng\u01B0\u1EDDi kh\xE1c \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o k\u1EBFt qu\u1EA3 nh\u01B0 m\xECnh mu\u1ED1n.",
      career: "H\u1EE3p vai tr\xF2 qu\u1EA3n l\xFD, kinh doanh, t\xE0i ch\xEDnh \u2014 n\u01A1i b\u1EA1n c\xF3 th\u1EC3 t\u1EA1o \u1EA3nh h\u01B0\u1EDFng th\u1EADt v\xE0 \u0111o l\u01B0\u1EDDng \u0111\u01B0\u1EE3c k\u1EBFt qu\u1EA3 c\xF4ng vi\u1EC7c c\u1EE7a m\xECnh.",
      relationships: "M\u1EA1nh m\u1EBD, b\u1EA3o v\u1EC7 ng\u01B0\u1EDDi th\xE2n. Nh\u01B0ng c\xF3 th\u1EC3 \xE1p \u0111\u1EB7t ti\xEAu chu\u1EA9n cao c\u1EE7a m\xECnh l\xEAn c\u1EA3 ng\u01B0\u1EDDi kh\xE1c, k\u1EC3 c\u1EA3 khi h\u1ECD kh\xF4ng y\xEAu c\u1EA7u.",
      communication: "D\u1EE9t kho\xE1t, h\u01B0\u1EDBng v\u1EC1 k\u1EBFt qu\u1EA3. \u0110\xF4i khi thi\u1EBFu ki\xEAn nh\u1EABn v\u1EDBi nh\u1EEFng chi ti\u1EBFt c\u1EA3m x\xFAc m\xE0 ng\u01B0\u1EDDi kh\xE1c c\u1EA7n \u0111\u01B0\u1EE3c l\u1EAFng nghe tr\u01B0\u1EDBc.",
      growth: "H\u1ECDc \u0111\u1ECBnh ngh\u0129a th\xE0nh c\xF4ng r\u1ED9ng h\u01A1n ti\u1EC1n b\u1EA1c v\xE0 \u0111\u1ECBa v\u1ECB. Chia s\u1EBB quy\u1EC1n ki\u1EC3m so\xE1t v\u1EDBi ng\u01B0\u1EDDi m\xECnh tin t\u01B0\u1EDFng thay v\xEC lu\xF4n ph\u1EA3i l\xE0 ng\u01B0\u1EDDi n\u1EAFm to\xE0n quy\u1EC1n."
    },
    9: {
      overview: "S\u1ED1 9 bao dung, l\xFD t\u01B0\u1EDFng h\xF3a, v\xE0 quan t\xE2m \u0111\u1EBFn nh\u1EEFng v\u1EA5n \u0111\u1EC1 l\u1EDBn h\u01A1n b\u1EA3n th\xE2n \u2014 nh\u01B0 c\u1ED9ng \u0111\u1ED3ng hay nh\xE2n lo\u1EA1i. B\xE0i h\u1ECDc l\u1EDBn l\xE0 h\u1ECDc c\xE1ch bu\xF4ng b\u1ECF m\xE0 kh\xF4ng t\u1ED5n th\u01B0\u01A1ng.",
      strengths: "V\u1ECB tha, gi\xE0u c\u1EA3m h\u1EE9ng, c\xF3 kh\u1EA3 n\u0103ng nh\xECn xa h\u01A1n l\u1EE3i \xEDch c\xE1 nh\xE2n tr\u01B0\u1EDBc m\u1EAFt.",
      challenges: "Hay \xF4m m\u1ED9ng t\u01B0\u1EDFng xa r\u1EDDi th\u1EF1c t\u1EBF. Kh\xF3 d\u1EE9t kho\xE1t khi c\u1EA7n k\u1EBFt th\xFAc m\u1ED9t giai \u0111o\u1EA1n, m\u1ED9t m\u1ED1i quan h\u1EC7, hay m\u1ED9t d\u1EF1 \xE1n \u0111\xE3 kh\xF4ng c\xF2n ph\xF9 h\u1EE3p.",
      career: "H\u1EE3p l\u0129nh v\u1EF1c ph\u1EE5c v\u1EE5 c\u1ED9ng \u0111\u1ED3ng, ngh\u1EC7 thu\u1EADt mang th\xF4ng \u0111i\u1EC7p, gi\xE1o d\u1EE5c \u2014 n\u01A1i c\xF4ng vi\u1EC7c c\xF3 \xFD ngh\u0129a l\u1EDBn h\u01A1n ch\xEDnh b\u1EA3n th\xE2n b\u1EA1n.",
      relationships: "R\u1ED9ng l\xF2ng, d\u1EC5 tha th\u1EE9. Nh\u01B0ng c\xF3 th\u1EC3 l\xFD t\u01B0\u1EDFng h\xF3a ng\u01B0\u1EDDi kh\xE1c qu\xE1 m\u1EE9c r\u1ED3i th\u1EA5t v\u1ECDng khi h\u1ECD kh\xF4ng nh\u01B0 m\xECnh k\u1EF3 v\u1ECDng.",
      communication: "Truy\u1EC1n c\u1EA3m h\u1EE9ng, gi\xE0u h\xECnh \u1EA3nh v\xE0 c\u1EA3m x\xFAc. C\xF3 th\u1EC3 n\xF3i v\xF2ng vo khi c\u1EA7n \u0111\u01B0a ra m\u1ED9t quy\u1EBFt \u0111\u1ECBnh d\u1EE9t kho\xE1t.",
      growth: "H\u1ECDc bu\xF4ng b\u1ECF \u0111\xFAng l\xFAc m\xE0 kh\xF4ng c\u1EA3m th\u1EA5y t\u1ED9i l\u1ED7i. Gi\u1EEF l\xFD t\u01B0\u1EDFng c\u1EE7a m\xECnh nh\u01B0ng g\u1EAFn n\xF3 v\u1EDBi h\xE0nh \u0111\u1ED9ng th\u1EF1c t\u1EBF, c\u1EE5 th\u1EC3 h\u01A1n l\xE0 ch\u1EC9 \u1EDF trong suy ngh\u0129."
    },
    11: {
      overview: "S\u1ED1 11 c\xF3 tr\u1EF1c gi\xE1c c\u1EF1c nh\u1EA1y, nh\xECn th\u1EA5y \u0111i\u1EC1u ng\u01B0\u1EDDi kh\xE1c kh\xF4ng th\u1EA5y, v\xE0 kh\u1EA3 n\u0103ng truy\u1EC1n c\u1EA3m h\u1EE9ng m\u1EA1nh m\u1EBD. Mang n\u0103ng l\u01B0\u1EE3ng g\u1EA5p \u0111\xF4i s\u1ED1 2 nh\u01B0ng \u0111i k\xE8m \xE1p l\u1EF1c tinh th\u1EA7n l\u1EDBn h\u01A1n.",
      strengths: "T\u1EA7m nh\xECn s\u1EAFc b\xE9n, s\u1EE9c \u1EA3nh h\u01B0\u1EDFng t\u1EF1 nhi\xEAn v\u1EDBi ng\u01B0\u1EDDi xung quanh, tr\u1EF1c gi\xE1c v\u01B0\u1EE3t tr\u1ED9i.",
      challenges: "D\u1EC5 lo \xE2u, qu\xE1 nh\u1EA1y c\u1EA3m v\u1EDBi n\u0103ng l\u01B0\u1EE3ng xung quanh \u2014 d\u1EC5 b\u1ECB \u1EA3nh h\u01B0\u1EDFng b\u1EDFi c\u1EA3m x\xFAc c\u1EE7a ng\u01B0\u1EDDi kh\xE1c ho\u1EB7c kh\xF4ng kh\xED chung.",
      career: 'H\u1EE3p vai tr\xF2 truy\u1EC1n c\u1EA3m h\u1EE9ng, c\u1ED1 v\u1EA5n, s\xE1ng t\u1EA1o mang t\xEDnh khai m\u1EDF. C\u1EA7n h\u1ECDc c\xE1ch "h\u1EA1 c\xE1nh" \xFD t\u01B0\u1EDFng l\u1EDBn th\xE0nh h\xE0nh \u0111\u1ED9ng c\u1EE5 th\u1EC3, \u0111\u1EC3 kh\xF4ng ch\u1EC9 d\u1EEBng \u1EDF t\u1EA7m nh\xECn m\xE0 thi\u1EBFu th\u1EF1c thi.',
      relationships: "C\u1EA3m nh\u1EADn s\xE2u s\u1EAFc c\u1EA3m x\xFAc c\u1EE7a ng\u01B0\u1EDDi kh\xE1c, \u0111\xF4i khi \u0111\u1EBFn m\u1EE9c qu\xE1 t\u1EA3i v\xEC h\u1EA5p th\u1EE5 n\u0103ng l\u01B0\u1EE3ng xung quanh m\xECnh.",
      communication: "Gi\xE0u \u1EA9n \xFD, thi\xEAn v\u1EC1 tr\u1EF1c gi\xE1c. C\xF3 th\u1EC3 kh\xF3 di\u1EC5n \u0111\u1EA1t m\u1EA1ch l\u1EA1c \u0111i\u1EC1u m\xECnh c\u1EA3m nh\u1EADn \u0111\u01B0\u1EE3c, v\xEC c\u1EA3m nh\u1EADn \u0111\u1EBFn nhanh h\u01A1n ng\xF4n t\u1EEB.",
      growth: "H\u1ECDc c\xE1c c\xE1ch gi\u1EEF v\u1EEFng tinh th\u1EA7n khi n\u0103ng l\u01B0\u1EE3ng xung quanh qu\xE1 nhi\u1EC1u (grounding). Bi\u1EBFn t\u1EA7m nh\xECn l\u1EDBn th\xE0nh t\u1EEBng b\u01B0\u1EDBc h\xE0nh \u0111\u1ED9ng nh\u1ECF, kh\xF4ng \u0111\u1EC3 \xE1p l\u1EF1c t\u1EF1 \u0111\u1EB7t ra l\xE0m ki\u1EC7t s\u1EE9c."
    },
    22: {
      overview: "S\u1ED1 22 k\u1EBFt h\u1EE3p t\u1EA7m nh\xECn l\u1EDBn (nh\u01B0 s\u1ED1 11) v\u1EDBi kh\u1EA3 n\u0103ng bi\u1EBFn \xFD t\u01B0\u1EDFng th\xE0nh hi\u1EC7n th\u1EF1c \u1EDF quy m\xF4 l\u1EDBn (nh\u01B0 s\u1ED1 4). C\xF3 ti\u1EC1m n\u0103ng t\u1EA1o ra \u1EA3nh h\u01B0\u1EDFng l\xE2u d\xE0i v\xE0 h\u1EEFu h\xECnh.",
      strengths: "V\u1EEBa m\u01A1 l\u1EDBn v\u1EEBa l\xE0m \u0111\u01B0\u1EE3c \u2014 hi\u1EBFm khi ch\u1EC9 d\u1EEBng \u1EDF \xFD t\u01B0\u1EDFng m\xE0 lu\xF4n t\xECm c\xE1ch hi\u1EC7n th\u1EF1c h\xF3a.",
      challenges: "\xC1p l\u1EF1c t\u1EF1 \u0111\u1EB7t ra r\u1EA5t cao, d\u1EC5 ki\u1EC7t s\u1EE9c n\u1EBFu kh\xF4ng c\xF3 k\u1EBF ho\u1EA1ch th\u1EF1c t\u1EBF \u0111i k\xE8m v\u1EDBi t\u1EA7m nh\xECn.",
      career: "H\u1EE3p vai tr\xF2 l\xE3nh \u0111\u1EA1o d\u1EF1 \xE1n l\u1EDBn, ki\u1EBFn t\u1EA1o h\u1EC7 th\u1ED1ng ho\u1EB7c t\u1ED5 ch\u1EE9c c\xF3 \u1EA3nh h\u01B0\u1EDFng l\xE2u d\xE0i, v\u01B0\u1EE3t ra ngo\xE0i quy m\xF4 c\xE1 nh\xE2n.",
      relationships: "\u0110\xE1ng tin, c\xF3 t\u1EA7m nh\xECn chung v\u1EDBi ng\u01B0\u1EDDi m\xECnh g\u1EAFn b\xF3. Nh\u01B0ng d\u1EC5 \u0111\u1EB7t k\u1EF3 v\u1ECDng cao l\xEAn c\u1EA3 b\u1EA3n th\xE2n v\xE0 ng\u01B0\u1EDDi xung quanh.",
      communication: "V\u1EEBa truy\u1EC1n c\u1EA3m h\u1EE9ng v\u1EEBa c\u1EE5 th\u1EC3 h\xF3a \u0111\u01B0\u1EE3c b\u1EB1ng k\u1EBF ho\u1EA1ch r\xF5 r\xE0ng \u2014 hi\u1EBFm v\xE0 m\u1EA1nh, nh\u01B0ng c\xF3 th\u1EC3 v\xF4 t\xECnh \xE1p \u0111\u1EB7t ti\xEAu chu\u1EA9n cao khi tr\xECnh b\xE0y \xFD t\u01B0\u1EDFng.",
      growth: "H\u1ECDc chia nh\u1ECF m\u1EE5c ti\xEAu l\u1EDBn th\xE0nh c\xE1c b\u01B0\u1EDBc kh\u1EA3 thi. Cho ph\xE9p ti\u1EBFn \u0111\u1ED9 kh\xF4ng ho\xE0n h\u1EA3o, v\xE0 ch\u0103m s\xF3c s\u1EE9c kh\u1ECFe tinh th\u1EA7n song song v\u1EDBi tham v\u1ECDng l\u1EDBn."
    },
    33: {
      overview: "S\u1ED1 33 hi\u1EBFm g\u1EB7p nh\u1EA5t, mang n\u0103ng l\u01B0\u1EE3ng ph\u1EE5ng s\u1EF1 v\xF4 \u0111i\u1EC1u ki\u1EC7n, \u0111\u1EB7t h\u1EA1nh ph\xFAc c\u1EE7a ng\u01B0\u1EDDi kh\xE1c l\xEAn h\xE0ng \u0111\u1EA7u. K\u1EBFt h\u1EE3p s\u1EF1 s\xE1ng t\u1EA1o (3) v\u1EDBi tr\xE1ch nhi\u1EC7m ch\u0103m s\xF3c (6) \u1EDF t\u1EA7m m\u1EE9c cao h\u01A1n.",
      strengths: "L\xF2ng tr\u1EAFc \u1EA9n s\xE2u s\u1EAFc, kh\u1EA3 n\u0103ng ch\u0103m s\xF3c v\xE0 n\xE2ng \u0111\u1EE1 ng\u01B0\u1EDDi kh\xE1c m\u1ED9t c\xE1ch t\u1EF1 nhi\xEAn, ch\xE2n th\xE0nh.",
      challenges: "R\u1EA5t d\u1EC5 hy sinh b\u1EA3n th\xE2n qu\xE1 m\u1EE9c, \u0111\u1EB7t nhu c\u1EA7u c\u1EE7a ng\u01B0\u1EDDi kh\xE1c l\xEAn tr\xEAn nhu c\u1EA7u c\u1EE7a ch\xEDnh m\xECnh li\xEAn t\u1EE5c.",
      career: "H\u1EE3p vai tr\xF2 gi\u1EA3ng d\u1EA1y, ch\u1EEFa l\xE0nh, ph\u1EE5ng s\u1EF1 c\u1ED9ng \u0111\u1ED3ng \u1EDF quy m\xF4 r\u1ED9ng \u2014 n\u01A1i l\xF2ng tr\u1EAFc \u1EA9n c\u1EE7a b\u1EA1n t\u1EA1o ra t\xE1c \u0111\u1ED9ng th\u1EADt.",
      relationships: "Cho \u0111i v\xF4 \u0111i\u1EC1u ki\u1EC7n, \u0111\u1EB7t h\u1EA1nh ph\xFAc ng\u01B0\u1EDDi kh\xE1c l\xEAn h\xE0ng \u0111\u1EA7u. C\u1EA7n h\u1ECDc nh\u1EADn l\u1EA1i, kh\xF4ng ch\u1EC9 lu\xF4n l\xE0 ng\u01B0\u1EDDi cho.",
      communication: "\u1EA4m \xE1p, truy\u1EC1n c\u1EA3m h\u1EE9ng qua s\u1EF1 ch\xE2n th\xE0nh h\u01A1n l\xE0 l\u1EDDi n\xF3i hoa m\u1EF9. Ng\u01B0\u1EDDi kh\xE1c c\u1EA3m nh\u1EADn \u0111\u01B0\u1EE3c s\u1EF1 quan t\xE2m th\u1EADt s\u1EF1 t\u1EEB b\u1EA1n.",
      growth: "H\u1ECDc ch\u0103m s\xF3c ch\xEDnh m\xECnh tr\u01B0\u1EDBc. \u0110\u1EB7t gi\u1EDBi h\u1EA1n r\xF5 r\xE0ng \u0111\u1EC3 l\xF2ng tr\u1EAFc \u1EA9n kh\xF4ng bi\u1EBFn th\xE0nh s\u1EF1 hy sinh \u0111\u1EBFn c\u1EA1n ki\u1EC7t b\u1EA3n th\xE2n."
    }
  };
  function getLifePathDetail(n) {
    return LIFE_PATH_DETAIL[n];
  }

  // src/lib/numerology/group-compatibility.ts
  var LIFE_PATH_GROUP_LABELS = {
    hanhDong: { name: "H\xE0nh \u0111\u1ED9ng", description: "Coi tr\u1ECDng k\u1EBFt qu\u1EA3, ch\u1EE7 \u0111\u1ED9ng d\u1EABn d\u1EAFt ho\u1EB7c x\xE2y d\u1EF1ng n\u1EC1n t\u1EA3ng v\u1EEFng." },
    ketNoi: { name: "K\u1EBFt n\u1ED1i", description: "Coi tr\u1ECDng h\xF2a kh\xED, quan t\xE2m v\xE0 ch\u0103m s\xF3c ng\u01B0\u1EDDi xung quanh." },
    master: { name: "Master", description: "Mang n\u0103ng l\u01B0\u1EE3ng v\xE0 tr\u1EF1c gi\xE1c m\u1EA1nh h\u01A1n m\u1EE9c th\u01B0\u1EDDng, \u0111i k\xE8m \xE1p l\u1EF1c tinh th\u1EA7n l\u1EDBn h\u01A1n." },
    noiTam: { name: "N\u1ED9i t\xE2m", description: "H\u01B0\u1EDBng v\xE0o b\xEAn trong, c\u1EA7n kh\xF4ng gian ri\xEAng \u0111\u1EC3 suy ngh\u0129 v\xE0 n\u1EA1p l\u1EA1i n\u0103ng l\u01B0\u1EE3ng." },
    sangTao: { name: "S\xE1ng t\u1EA1o", description: "Th\xEDch t\u1EF1 do, bi\u1EC3u \u0111\u1EA1t b\u1EA3n th\xE2n, kh\xF4ng ch\u1ECBu \u0111\u01B0\u1EE3c l\u1EB7p l\u1EA1i/g\xF2 b\xF3." }
  };
  var LIFE_PATH_TO_GROUP = {
    1: "hanhDong",
    2: "ketNoi",
    3: "sangTao",
    4: "hanhDong",
    5: "sangTao",
    6: "ketNoi",
    7: "noiTam",
    8: "hanhDong",
    9: "ketNoi",
    11: "master",
    22: "master",
    33: "master"
  };
  function getLifePathGroup(n) {
    return LIFE_PATH_TO_GROUP[n];
  }
  var GROUP_PAIR_COMPARISON = {
    "hanhDong|hanhDong": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u th\xEDch h\xE0nh \u0111\u1ED9ng, mu\u1ED1n th\u1EA5y k\u1EBFt qu\u1EA3 c\u1EE5 th\u1EC3, kh\xF4ng ng\u1ED3i ch\u1EDD \u0111\u1EE3i l\xE2u. D\u1EC5 t\xF4n tr\u1ECDng nhau v\xEC c\xF9ng coi tr\u1ECDng hi\u1EC7u qu\u1EA3 v\xE0 tr\xE1ch nhi\u1EC7m.",
      differences: "C\xF3 th\u1EC3 tranh gi\xE0nh ai l\xE0 ng\u01B0\u1EDDi quy\u1EBFt \u0111\u1ECBnh cu\u1ED1i c\xF9ng, v\xEC c\u1EA3 hai \u0111\u1EC1u mu\u1ED1n d\u1EABn \u0111\u1EA7u ho\u1EB7c ki\u1EC3m so\xE1t t\xECnh hu\u1ED1ng theo c\xE1ch ri\xEAng c\u1EE7a m\xECnh."
    },
    "hanhDong|ketNoi": {
      similarities: "Ng\u01B0\u1EDDi nh\xF3m H\xE0nh \u0111\u1ED9ng mang l\u1EA1i \u0111\u1ECBnh h\u01B0\u1EDBng r\xF5 r\xE0ng, ng\u01B0\u1EDDi nh\xF3m K\u1EBFt n\u1ED1i mang l\u1EA1i s\u1EF1 quan t\xE2m v\xE0 g\u1EAFn k\u1EBFt \u2014 hai vai tr\xF2 b\u1ED5 sung t\u1ED1t cho nhau trong c\xF4ng vi\u1EC7c chung ho\u1EB7c gia \u0111\xECnh.",
      differences: "Ng\u01B0\u1EDDi nh\xF3m H\xE0nh \u0111\u1ED9ng \u01B0u ti\xEAn k\u1EBFt qu\u1EA3, d\u1EC5 b\u1ECF qua c\u1EA3m x\xFAc; ng\u01B0\u1EDDi nh\xF3m K\u1EBFt n\u1ED1i \u01B0u ti\xEAn h\xF2a kh\xED, c\xF3 th\u1EC3 th\u1EA5y \u0111\u1ED1i ph\u01B0\u01A1ng qu\xE1 th\u1EB3ng ho\u1EB7c thi\u1EBFu nh\u1EA1y c\u1EA3m."
    },
    "hanhDong|master": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u mang tham v\u1ECDng ho\u1EB7c t\u1EA7m nh\xECn l\u1EDBn, mu\u1ED1n t\u1EA1o ra \u0111i\u1EC1u g\xEC \u0111\xF3 c\xF3 \xFD ngh\u0129a v\xE0 quy m\xF4.",
      differences: "Ng\u01B0\u1EDDi H\xE0nh \u0111\u1ED9ng t\u1EADp trung v\xE0o th\u1EF1c thi c\u1EE5 th\u1EC3; ng\u01B0\u1EDDi Master d\u1EC5 b\u1ECB cu\u1ED1n v\xE0o t\u1EA7m nh\xECn ho\u1EB7c c\u1EA3m x\xFAc l\u1EDBn h\u01A1n th\u1EF1c t\u1EBF, c\u1EA7n ng\u01B0\u1EDDi H\xE0nh \u0111\u1ED9ng gi\xFAp hi\u1EC7n th\u1EF1c h\xF3a \u2014 nh\u01B0ng c\u0169ng d\u1EC5 c\u1EA3m th\u1EA5y b\u1ECB th\xFAc \xE9p qu\xE1 nhanh."
    },
    "hanhDong|noiTam": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u c\xF3 th\u1EC3 l\xE0m vi\u1EC7c \u0111\u1ED9c l\u1EADp t\u1ED1t, kh\xF4ng c\u1EA7n nhi\u1EC1u s\u1EF1 gi\xE1m s\xE1t ho\u1EB7c \u0111\u1ED9ng vi\xEAn t\u1EEB b\xEAn ngo\xE0i.",
      differences: "Ng\u01B0\u1EDDi H\xE0nh \u0111\u1ED9ng th\xEDch quy\u1EBFt \u0111\u1ECBnh nhanh v\xE0 h\xE0nh \u0111\u1ED9ng ngay; ng\u01B0\u1EDDi N\u1ED9i t\xE2m c\u1EA7n th\u1EDDi gian suy ngh\u0129 k\u1EF9 tr\u01B0\u1EDBc khi h\xE0nh \u0111\u1ED9ng \u2014 d\u1EC5 khi\u1EBFn ng\u01B0\u1EDDi H\xE0nh \u0111\u1ED9ng m\u1EA5t ki\xEAn nh\u1EABn."
    },
    "hanhDong|sangTao": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u ch\u1EE7 \u0111\u1ED9ng, kh\xF4ng ng\u1EA1i th\u1EED \u0111i\u1EC1u m\u1EDBi \u2014 ng\u01B0\u1EDDi H\xE0nh \u0111\u1ED9ng th\u1EED \u0111\u1EC3 \u0111\u1EA1t m\u1EE5c ti\xEAu, ng\u01B0\u1EDDi S\xE1ng t\u1EA1o th\u1EED \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m.",
      differences: "Ng\u01B0\u1EDDi H\xE0nh \u0111\u1ED9ng c\u1EA7n k\u1EBF ho\u1EA1ch v\xE0 k\u1EBFt qu\u1EA3 r\xF5 r\xE0ng; ng\u01B0\u1EDDi S\xE1ng t\u1EA1o d\u1EC5 ch\xE1n n\u1EBFu b\u1ECB \xE9p v\xE0o khu\xF4n kh\u1ED5 qu\xE1 ch\u1EB7t, d\u1EC5 g\xE2y kh\xF3 ch\u1ECBu cho c\u1EA3 hai ph\xEDa."
    },
    "ketNoi|ketNoi": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u coi tr\u1ECDng h\xF2a kh\xED, d\u1EC5 \u0111\u1ED3ng c\u1EA3m v\xE0 quan t\xE2m nhu c\u1EA7u c\u1EE7a nhau m\u1ED9t c\xE1ch t\u1EF1 nhi\xEAn.",
      differences: "C\u1EA3 hai c\xF3 th\u1EC3 c\xF9ng n\xE9 tr\xE1nh xung \u0111\u1ED9t, d\u1EABn \u0111\u1EBFn vi\u1EC7c kh\xF4ng ai ch\u1EE7 \u0111\u1ED9ng n\xF3i ra v\u1EA5n \u0111\u1EC1 th\u1EF1c s\u1EF1, \u0111\u1EC3 n\xF3 \xE2m \u1EC9 k\xE9o d\xE0i."
    },
    "ketNoi|master": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u quan t\xE2m \u0111\u1EBFn \u0111i\u1EC1u l\u1EDBn h\u01A1n b\u1EA3n th\xE2n \u2014 ng\u01B0\u1EDDi K\u1EBFt n\u1ED1i quan t\xE2m ng\u01B0\u1EDDi xung quanh, ng\u01B0\u1EDDi Master quan t\xE2m \xFD ngh\u0129a ho\u1EB7c t\u1EA7m nh\xECn r\u1ED9ng h\u01A1n.",
      differences: "Ng\u01B0\u1EDDi Master c\xF3 th\u1EC3 qu\xE1 t\u1EADp trung v\xE0o t\u1EA7m nh\xECn ho\u1EB7c s\u1EE9 m\u1EC7nh m\xE0 qu\xEAn ch\u0103m s\xF3c nh\u1EEFng chi ti\u1EBFt \u0111\u1EDDi th\u01B0\u1EDDng m\xE0 ng\u01B0\u1EDDi K\u1EBFt n\u1ED1i coi tr\u1ECDng."
    },
    "ketNoi|noiTam": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u nh\u1EA1y c\u1EA3m v\xE0 suy ngh\u0129 s\xE2u, c\xF3 th\u1EC3 hi\u1EC3u nhau \u1EDF m\u1EE9c c\u1EA3m x\xFAc m\xE0 kh\xF4ng c\u1EA7n n\xF3i nhi\u1EC1u.",
      differences: "Ng\u01B0\u1EDDi K\u1EBFt n\u1ED1i mu\u1ED1n chia s\u1EBB v\xE0 g\u1EA7n g\u0169i th\u01B0\u1EDDng xuy\xEAn; ng\u01B0\u1EDDi N\u1ED9i t\xE2m c\u1EA7n kh\xF4ng gian ri\xEAng \u0111\u1EC3 n\u1EA1p l\u1EA1i n\u0103ng l\u01B0\u1EE3ng, d\u1EC5 b\u1ECB hi\u1EC3u l\u1EA7m l\xE0 xa c\xE1ch ho\u1EB7c l\u1EA1nh nh\u1EA1t."
    },
    "ketNoi|sangTao": {
      similarities: "Ng\u01B0\u1EDDi K\u1EBFt n\u1ED1i mang l\u1EA1i s\u1EF1 \u1ED5n \u0111\u1ECBnh c\u1EA3m x\xFAc, ng\u01B0\u1EDDi S\xE1ng t\u1EA1o mang l\u1EA1i s\u1EF1 m\u1EDBi m\u1EBB, vui v\u1EBB \u2014 c\u1EA3 hai d\u1EC5 t\u1EA1o kh\xF4ng kh\xED \u1EA5m \xE1p khi \u1EDF c\xF9ng nhau.",
      differences: "Ng\u01B0\u1EDDi K\u1EBFt n\u1ED1i c\u1EA7n s\u1EF1 cam k\u1EBFt v\xE0 \u0111\u1EC1u \u0111\u1EB7n; ng\u01B0\u1EDDi S\xE1ng t\u1EA1o d\u1EC5 c\u1EA3m th\u1EA5y r\xE0ng bu\u1ED9c n\u1EBFu m\u1ED1i quan h\u1EC7 tr\u1EDF n\xEAn qu\xE1 l\u1EB7p l\u1EA1i ho\u1EB7c qu\xE1 ph\u1EE5 thu\u1ED9c."
    },
    "master|master": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u mang n\u0103ng l\u01B0\u1EE3ng v\xE0 \xE1p l\u1EF1c tinh th\u1EA7n l\u1EDBn h\u01A1n ng\u01B0\u1EDDi th\u01B0\u1EDDng, d\u1EC5 \u0111\u1ED3ng c\u1EA3m v\u1EDBi nh\u1EEFng g\xE1nh n\u1EB7ng v\xF4 h\xECnh m\xE0 \u0111\u1ED1i ph\u01B0\u01A1ng \u0111ang mang.",
      differences: "C\u1EA3 hai c\xF3 th\u1EC3 c\xF9ng \u0111\u1EB7t k\u1EF3 v\u1ECDng qu\xE1 cao l\xEAn b\u1EA3n th\xE2n v\xE0 l\xEAn nhau, d\u1EC5 khi\u1EBFn c\u1EA3 hai c\xF9ng ki\u1EC7t s\u1EE9c n\u1EBFu kh\xF4ng ai ch\u1EE7 \u0111\u1ED9ng l\xE0m ch\u1EADm l\u1EA1i."
    },
    "master|noiTam": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u c\xF3 \u0111\u1EDDi s\u1ED1ng n\u1ED9i t\xE2m phong ph\xFA, th\u01B0\u1EDDng suy ngh\u0129 s\xE2u h\u01A1n nh\u1EEFng g\xEC th\u1EC3 hi\u1EC7n ra ngo\xE0i.",
      differences: "Ng\u01B0\u1EDDi N\u1ED9i t\xE2m x\u1EED l\xFD m\u1ECDi th\u1EE9 m\u1ED9t m\xECnh, \xE2m th\u1EA7m; ng\u01B0\u1EDDi Master d\u1EC5 b\u1ECB c\u1EA3m x\xFAc ho\u1EB7c n\u0103ng l\u01B0\u1EE3ng b\xEAn ngo\xE0i chi ph\u1ED1i m\u1EA1nh \u2014 m\u1ED9t b\xEAn c\u1EA7n im l\u1EB7ng, m\u1ED9t b\xEAn c\u1EA7n \u0111\u01B0\u1EE3c l\u1EAFng nghe."
    },
    "master|sangTao": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u gi\xE0u tr\xED t\u01B0\u1EDFng t\u01B0\u1EE3ng v\xE0 c\xF3 th\u1EC3 truy\u1EC1n c\u1EA3m h\u1EE9ng cho ng\u01B0\u1EDDi kh\xE1c theo c\xE1ch ri\xEAng c\u1EE7a m\xECnh.",
      differences: "Ng\u01B0\u1EDDi S\xE1ng t\u1EA1o thi\xEAn v\u1EC1 bi\u1EC3u \u0111\u1EA1t nh\u1EB9 nh\xE0ng, t\u1EE9c th\u1EDDi; ng\u01B0\u1EDDi Master mang n\u0103ng l\u01B0\u1EE3ng m\u1EA1nh v\xE0 \u0111\xF4i khi n\u1EB7ng n\u1EC1 h\u01A1n \u2014 d\u1EC5 khi\u1EBFn ng\u01B0\u1EDDi S\xE1ng t\u1EA1o c\u1EA3m th\u1EA5y \xE1p l\u1EF1c n\u1EBFu b\u1ECB k\u1EF3 v\u1ECDng qu\xE1 cao."
    },
    "noiTam|noiTam": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u hi\u1EC3u v\xE0 t\xF4n tr\u1ECDng nhu c\u1EA7u \u1EDF m\u1ED9t m\xECnh c\u1EE7a ng\u01B0\u1EDDi kia, \xEDt khi l\xE0m phi\u1EC1n kh\xF4ng gian ri\xEAng c\u1EE7a nhau.",
      differences: "C\u1EA3 hai c\xF3 th\u1EC3 c\xF9ng ng\u1EA1i ch\u1EE7 \u0111\u1ED9ng m\u1EDF l\xF2ng tr\u01B0\u1EDBc, khi\u1EBFn m\u1ED1i quan h\u1EC7 ti\u1EBFn tri\u1EC3n ch\u1EADm ho\u1EB7c thi\u1EBFu s\u1EF1 g\u1EAFn k\u1EBFt r\xF5 r\xE0ng."
    },
    "noiTam|sangTao": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u kh\xF4ng th\xEDch b\u1ECB \xE1p \u0111\u1EB7t khu\xF4n m\u1EABu, coi tr\u1ECDng kh\xF4ng gian \u0111\u1EC3 l\xE0 ch\xEDnh m\xECnh.",
      differences: "Ng\u01B0\u1EDDi S\xE1ng t\u1EA1o th\u1EC3 hi\u1EC7n ra ngo\xE0i, th\xEDch giao ti\u1EBFp s\xF4i \u0111\u1ED9ng; ng\u01B0\u1EDDi N\u1ED9i t\xE2m h\u01B0\u1EDBng v\xE0o trong, c\u1EA7n y\xEAn t\u0129nh \u2014 m\u1ED9t b\xEAn c\xF3 th\u1EC3 th\u1EA5y b\xEAn kia qu\xE1 \u1ED3n, b\xEAn kia th\u1EA5y \u0111\u1ED1i ph\u01B0\u01A1ng qu\xE1 kh\xE9p k\xEDn."
    },
    "sangTao|sangTao": {
      similarities: "C\u1EA3 hai \u0111\u1EC1u tho\u1EA3i m\xE1i, vui v\u1EBB, kh\xF4ng th\xEDch b\u1ECB g\xF2 b\xF3 \u2014 d\u1EC5 t\u1EA1o ra m\u1ED1i quan h\u1EC7 nh\u1EB9 nh\xE0ng, tr\xE0n n\u0103ng l\u01B0\u1EE3ng t\xEDch c\u1EF1c.",
      differences: 'C\u1EA3 hai c\xF3 th\u1EC3 c\xF9ng thi\u1EBFu ki\xEAn \u0111\u1ECBnh, kh\xF4ng ai gi\u1EEF vai tr\xF2 "\u1ED5n \u0111\u1ECBnh" trong m\u1ED1i quan h\u1EC7, d\u1EC5 khi\u1EBFn k\u1EBF ho\u1EA1ch chung kh\xF3 th\xE0nh h\xECnh.'
    }
  };
  function buildGroupPairKey(a, b) {
    return [a, b].sort().join("|");
  }
  function compareLifePathNumbers(numberA, numberB) {
    const groupA = getLifePathGroup(numberA);
    const groupB = getLifePathGroup(numberB);
    const comparison = GROUP_PAIR_COMPARISON[buildGroupPairKey(groupA, groupB)];
    return { groupA, groupB, ...comparison };
  }
  return __toCommonJS(index_exports);
})();
