PROJECT_NAME = HelloTriangle 

VULKAN_SDK_PATH = /home/sam/Developer/VulkanSDK/1.0.57.0/x86_64
STB_INCLUDE_PATH = ./lib/stb/

CFLAGS = -std=c++11 -I$(VULKAN_SDK_PATH)/include -I$(STB_INCLUDE_PATH)
LDFLAGS = -L$(VULKAN_SDK_PATH)/lib `pkg-config --static --libs glfw3` -lvulkan
BIN_DIR = build
MKDIR_P = mkdir -p

$(PROJECT_NAME): dirs main.cpp
	g++ $(CFLAGS) -o $(BIN_DIR)/$(PROJECT_NAME) main.cpp $(LDFLAGS)

.PHONY: dirs test clean

dirs: $(BIN_DIR)

$(BIN_DIR):
	$(MKDIR_P) $(BIN_DIR)

test: $(PROJECT_NAME) 
	LD_LIBRARY_PATH=$(VULKAN_SDK_PATH)/lib VK_LAYER_PATH=$(VULKAN_SDK_PATH)/etc/explicit_layer.d ./$(BIN_DIR)/$(PROJECT_NAME)

clean:
	rm -f $(PROJECT_NAME) 
