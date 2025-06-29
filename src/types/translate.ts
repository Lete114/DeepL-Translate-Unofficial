export interface ITranslateOptionsWithoutText {
  from: string
  to: string
}

export interface ITranslateOptions extends ITranslateOptionsWithoutText {
  text: string
}

export interface ITranslateResult { text: string, alternatives: string [] }

export interface ITranslateResultError {
  type: string
  data?: {
    error: {
      code: number
      data: {
        what: string
      }
      message: string
    }
  }
  message: string
}
