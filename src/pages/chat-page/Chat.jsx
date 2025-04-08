import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import { Box, TextField, Typography, Button, Divider } from "@mui/material";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <PageContainer title={"Chat"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Box
          width={"85rem"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          //   border={"1px solid black"}
          height={"100%"}
          p={2}
        >
          {/* Header */}

          {/* Body */}
          <Box
            flex={1}
            width="100%"
            overflow="auto"
            display="flex"
            flexDirection="column"
            gap={1}
            p={2}
            border="1px solid #ddd"
            borderRadius="8px"
            my={2}
          >
            <Box width="100%" py={2}>
              <Typography variant="h5" color="#ddd">
                Chat Interface
              </Typography>
              <Divider />
            </Box>
            {messages.length === 0 ? (
              <Typography variant="body2" color="gray" textAlign="center">
                No messages yet.
              </Typography>
            ) : (
              messages.map((msg, index) => (
                <Box
                  key={index}
                  alignSelf={index % 2 === 0 ? "flex-start" : "flex-end"}
                  bgcolor={index % 2 === 0 ? "#e0f7fa" : "#dcedc8"}
                  px={2}
                  py={1}
                  borderRadius={2}
                  maxWidth="60%"
                >
                  <Typography variant="body1">{msg}</Typography>
                </Box>
              ))
            )}
          </Box>

          {/* Footer */}
          <Box width="100%" display="flex" gap={2}>
            <TextField
              fullWidth
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button variant="contained" onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Chat;
