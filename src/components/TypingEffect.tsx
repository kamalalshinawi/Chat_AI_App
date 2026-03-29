import { StyleSheet, Text, View, TextStyle } from 'react-native';
import React, { FC, useEffect, useState } from 'react';

interface typeProps {
  text: string;
  style: TextStyle;
}

const TypingEffect: FC<typeProps> = ({ text, style }) => {
  const words = text.split(' ');
  const [displayMessage, setDisplayMessage] = useState('');
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < words.length - 1) {
        setDisplayMessage(prevMessage => {
          return prevMessage
            ? `${prevMessage} ${words[index]}`
            : `${words[index]}`;
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, 180);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return <Text style={style}>{displayMessage}</Text>;
};

export default TypingEffect;

const styles = StyleSheet.create({});
