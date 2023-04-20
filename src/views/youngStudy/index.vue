<script setup>
import { useRouter } from 'vue-router';
import { isPC } from '../../utils';
const router = useRouter();
async function init() {
  const flag = isPC();
  if (flag) router.replace('/youngStudy/pc');
  else location.href = location.origin + '/mobile_class';
}
init();
</script>