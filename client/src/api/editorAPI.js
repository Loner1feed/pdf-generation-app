import { instance } from './instance';

export const editorAPI = {
  sendData: async (data) => {
    const res = await instance.post(
      'generate-pdf',
      data,
    )

    return res.data;
  }
}