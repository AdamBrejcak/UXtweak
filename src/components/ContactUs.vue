<template>
  <div class="column items-center" :class="blackTextClass">
    <q-form @submit="onSubmit()" ref="contactFormRef">
      <div class="column items-center">
        <h3 class="q-mb-md text-weight-bolder">Contact Us</h3>
        <h5 class="q-ma-none q-mb-xl text-amber text-weight-bold">
          Feel free to send us a message
        </h5>
        <div class="q-pa-md bg-grey-2 contact-form">
          <label class="text-weight-bold" for="nameInput">Your Name:</label>
          <q-input
            id="nameInput"
            :color="amberColor"
            :bg-color="whiteColor"
            type="text"
            placeholder="John..."
            v-model="contactFormValues.name"
            filled
            outlined
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your name',
            ]"
          ></q-input>

          <label class="text-weight-bold" for="emailInput"
            >Your E-mail: *</label
          >

          <q-input
            id="emailInput"
            :color="amberColor"
            :bg-color="whiteColor"
            type="email"
            placeholder="You email address (... @ ...)"
            v-model="contactFormValues.email"
            filled
            outlined
            lazy-rules
            :rules="emailRules"
          />
          <label class="text-weight-bold" for="messageInput"
            >Your message: *</label
          >

          <q-input
            id="messageInput"
            type="textarea"
            :color="amberColor"
            :bg-color="whiteColor"
            placeholder="How we can help you?"
            outlined
            filled
            v-model="contactFormValues.message"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your message',
            ]"
          />

          <span>
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy?hl=en-US"
              class="text-amber"
            >
              Privacy Policy
            </a>
            and
            <a
              href="https://policies.google.com/terms?hl=en-US"
              class="text-amber"
            >
              Terms of Service apply
            </a>
          </span>
          <div>
            <q-btn
              label="Send"
              type="submit"
              :color="amberColor"
              no-caps
              unelevated
              class="q-my-xl full-width"
            />
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { QForm } from 'quasar';
import { contactForm } from 'src/pages/contactForm';
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'ContactUsComponent',
  props: {
    amberColor: {
      type: String,
    },
    whiteColor: {
      type: String,
    },
    blackColor: {
      type: String,
    },
    whiteTextClass: {
      type: String,
    },
    blackTextClass: {
      type: String,
    },
  },
  setup() {
    const contactFormRef: Ref<QForm | null> = ref(null);
    const contactFormValues: Ref<contactForm> = ref(
      new contactForm({
        name: '',
        email: '',
        message: '',
      })
    );
    const validateEmail = (email: string): RegExpMatchArray | null => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const emailRules = [
      (val: string) => (val && val.length > 0) || 'Please enter your email',
      (val: string) => !!validateEmail(val) || 'Please use correct emial form',
    ];
    const onSubmit = (): void => {
      console.log(contactFormValues.value);
      contactFormValues.value.name = null;
      contactFormValues.value.email = null;
      contactFormValues.value.message = null;
      if (contactFormRef.value) {
        contactFormRef.value.reset();
      }
    };
    return {
      contactFormRef,
      contactFormValues,
      emailRules,
      onSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>
.contact-form {
  max-width: 400px;
}
</style>
