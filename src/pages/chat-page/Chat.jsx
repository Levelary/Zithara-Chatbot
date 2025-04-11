import PageContainer from "../../components/PageContainer";
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Autocomplete,
  Tooltip,
} from "@mui/material";
import useChat from "./hook/useChat";
import AddIcon from "@mui/icons-material/Add";
import SentimentSatisfiedAlt from "@mui/icons-material/SentimentSatisfiedAlt";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const {
    messages,
    input,
    setInput,
    handleSend,
    chatName,
    setChatName,
    showEmojiPicker,
    setShowEmojiPicker,
    onEmojiClick,
    messagesEndRef,
  } = useChat();

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
          height={"100%"}
          p={2}
        >
          {/* Header */}
          <Box
            width="100%"
            py={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom="1px solid #ccc"
            px={3}
            mb={2}
          >
            <Box>
              <TextField
                value={chatName}
                onChange={(e) => setChatName(e.target.value)}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  input: {
                    color: "gray",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  },
                }}
              />
            </Box>

            <Box display="flex" gap={2} alignItems="center">
              <Autocomplete
                options={[]}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search by chat name..."
                    variant="outlined"
                    sx={{
                      borderRadius: 5,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ccc",
                        },
                        "&:hover fieldset": {
                          borderColor: "#999",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#666",
                        },
                      },
                      input: { color: "#000" },
                    }}
                  />
                )}
                sx={{ width: 250 }}
              />
            </Box>

            <Box>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  backgroundColor: "#0056b3",
                  border: "none",
                  width: "fit-content",
                  padding: "10px 20px",
                  fontFamily: "Poppins",
                  "&:hover": {
                    backgroundColor: "#004a99",
                    border: "none",
                  },
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                  "&:active": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                New
              </Button>
            </Box>
          </Box>

          {/* Body */}
          <Box
            flex={1}
            width="100%"
            overflow="auto"
            display="flex"
            flexDirection="column"
            gap={1}
            p={2}
            border="1px solid #ccc"
            borderRadius="8px"
            my={2}
            position="relative"
          >
            {messages.length === 0 ? (
              <Typography
                color="gray"
                textAlign="center"
                fontSize={"1.5rem"}
                fontWeight={600}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Hi! What can I help with?
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
            <div ref={messagesEndRef} />
          </Box>

          {/* Footer */}
          <Box width="100%" display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <Tooltip title="Insert Emoji">
                <IconButton onClick={() => setShowEmojiPicker((prev) => !prev)}>
                  <SentimentSatisfiedAlt />
                </IconButton>
              </Tooltip>
              <TextField
                fullWidth
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0056b3",
                  border: "none",
                  width: "fit-content",
                  padding: "10px 20px",
                  fontFamily: "Poppins",
                  "&:hover": {
                    backgroundColor: "#004a99",
                    border: "none",
                  },
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                  "&:active": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
                onClick={handleSend}
              >
                Send
              </Button>
            </Box>
            {showEmojiPicker && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: "70px",
                  left: "10px",
                  zIndex: 1000,
                }}
              >
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Chat;
