#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(location = 0) in vec3 vertColor;

layout(location = 0) out vec4 outColor;

vec3 gammaCorrect(float gamma, vec3 vertColor) {
    return pow(vertColor, vec3(1.0 / gamma));
}

void main() {
    // vec3 corrected = gammaCorrect(2.2, vertColor);

    outColor = vec4(vertColor, 1.0);
}
