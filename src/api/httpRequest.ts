import axios, { AxiosError } from 'axios';
import Config from 'react-native-config';

const HuggingFaceUrl = 'https://router.huggingface.co/v1/chat/completions';
const HuggingFaceModel = 'openai/gpt-oss-120b:fastest';

const normalizeToken = (token?: string) =>
  token?.replace(/^Bearer\s+/i, '').trim().replace(/^['"]|['"]$/g, '');

export const callHuggingFace = async (msg: string): Promise<string> => {
  const huggingFaceToken = normalizeToken(Config.TOKEN_KEY_HUGGING_FACE);

  if (!huggingFaceToken) {
    throw new Error(
      'Missing Hugging Face token. Add TOKEN_KEY_HUGGING_FACE in .env and rebuild the app.',
    );
  }

  try {
    const response = await axios.post(
      HuggingFaceUrl,
      {
        model: HuggingFaceModel,
        messages: [{ role: 'user', content: msg }],
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${huggingFaceToken}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const generatedText = response.data?.choices?.[0]?.message?.content;

    if (!generatedText || typeof generatedText !== 'string') {
      throw new Error('Invalid response format from Hugging Face API.');
    }

    return generatedText;
  } catch (error) {
    if (error instanceof AxiosError) {
      const statusCode = error.response?.status;
      const apiError =
        (error.response?.data as { error?: string } | undefined)?.error ??
        error.message;

      if (statusCode === 401) {
        throw new Error(
          'Hugging Face authentication failed (401). Verify token permissions and value in .env.',
        );
      }

      throw new Error(`Hugging Face request failed (${statusCode}): ${apiError}`);
    }

    throw error;
  }
};
